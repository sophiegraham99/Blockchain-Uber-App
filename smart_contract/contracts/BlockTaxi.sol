//SPDX-License-Identifier: MIT

pragma solidity >=0.8.9;


contract BlockTaxi {

    struct coordinates{
        int256 lat;
        int256 long;
    }
    enum status {passenger, driver}

    struct user{
        bool isMember;
        uint id;
        coordinates pickup;
        coordinates dropoff;
        uint timeRequired;
        uint estArrival;
        uint deed;
        uint paid;
        status serviceRequired;
        address walletAdd;
    }
        mapping (address => user) public users;
        address [] public userList;

        event ridePending(uint rideId, coordinates pickupFrom, coordinates dropoffTo, uint deed);
        event driverPending(uint rideId, uint estArrival);
        event rideChosen(uint rideId, uint timeRequired);
        event sendEther(uint rideId, uint bills);
        event cancellation(uint passengerId, uint paidId, uint cancelFee);

        constructor(){

        }

        function driverRequest() public{
            if(users[msg.sender].isMember == false){
                userList.push(msg.sender);
                users[msg.sender]= user({
                    isMember: true,
                    id: userList.length-1,
                    pickup: coordinates({lat: 0, long: 0}),
                    dropoff: coordinates({lat: 0, long: 0}),
                    timeRequired: 0,
                    estArrival: 0,
                    serviceRequired: status.driver,
                    deed: 0,
                    paid: 0,
                    walletAdd: address(0)
                });
            }else {
                users[msg.sender].pickup = coordinates({lat: 0, long: 0});
                users[msg.sender].dropoff = coordinates({lat: 0, long: 0});
                users[msg.sender].timeRequired = 0;
                users[msg.sender].estArrival = 0;
                users[msg.sender].serviceRequired = status.driver;
                users[msg.sender].paid = 0;
                users[msg.sender].walletAdd = address(0);
            }
        }

                function rideRequest(uint ridePrice, int256[]memory pickupFrom, int256[]memory dropoffTo) public{
            if(users[msg.sender].isMember == false){
                userList.push(msg.sender);
                users[msg.sender]= user({
                    isMember: true,
                    id: userList.length-1,
                    pickup: coordinates({lat: pickupFrom[0], long: dropoffTo[1]}),
                    dropoff: coordinates({lat: pickupFrom[0], long: dropoffTo[1]}),
                    timeRequired: 0,
                    estArrival: 0,
                    serviceRequired: status.passenger,
                    deed: ridePrice,
                    paid: 0,
                    walletAdd: address(0)
                });
            }else {
                users[msg.sender].pickup = coordinates({lat: pickupFrom[0], long: dropoffTo[1]});
                users[msg.sender].dropoff = coordinates({lat: pickupFrom[0], long: dropoffTo[1]});
                users[msg.sender].timeRequired = 0;
                users[msg.sender].estArrival = 0;
                users[msg.sender].serviceRequired = status.passenger;
                users[msg.sender].deed = ridePrice;
                users[msg.sender].paid = 0;
                users[msg.sender].walletAdd = address(0);
            }
        }

        function getId() view public returns(int){
            if (users[msg.sender].isMember==true){
                return int(users[msg.sender].id);
            }
            else{
                return -1;
            }
        }

//function enables drivers to view pending ride requests
        function viewRideRequests() public {
            require(users[msg.sender].isMember==true, "You must log in");
            require(users[msg.sender].serviceRequired==status.driver, "you must be a driver to select ride requests");
            for (uint i=0; i<userList.length; i++){
            emit ridePending(users[userList[i]].id, users[userList[i]].pickup, users[userList[i]].dropoff, users[userList[i]].deed);
        }}

//Function enables driver to chose rider and send arrival time
        function choseRide(uint rideId, uint timeRequired) public{
            users[userList[rideId]].walletAdd = msg.sender;
            users[msg.sender].walletAdd = userList[rideId];
            users[msg.sender].timeRequired = timeRequired;
            users[userList[rideId]].timeRequired = timeRequired;

            emit rideChosen(rideId, timeRequired);
        }

//Function enables rider to pay driver money
        function sendDriverEth() public payable{
            require(users[msg.sender].isMember==true, "You must log in");
            require(users[msg.sender].serviceRequired==status.passenger, "you must be a passenger to pay for rides");
            require(users[msg.sender].walletAdd != address(0), "must have a driver to pay");           
            payable(users[msg.sender].walletAdd).transfer(msg.value);
            users[msg.sender].paid = users[msg.sender].paid + msg.value;
            emit sendEther(users[users[msg.sender].walletAdd].id, msg.value);
        if (users[msg.sender].paid == users[msg.sender].deed){
            emit cancellation(users[msg.sender].id, users[users[msg.sender].walletAdd].id, 0);
        }
        }
}