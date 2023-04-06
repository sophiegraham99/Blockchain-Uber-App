import Image from 'next/image'
import ethereumLogo from '../assets/ethereumLogo.png'
import { useEffect, useContext, useState } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `h-full flex flex-col overflow-hidden`,
  title: `text-gray-500 px-7 py-4 border-t border-b text-base`,
  carList: `flex flex-col flex-1`,
  car: `flex p-3 m-2 items-center hover:text-white hover:border-teal-500 hover:bg-teal-500 border-2 border-grey-200 rounded-full`,
  selectedCar: `hover:bg-teal-500 border-2 border-teal-500 flex p-3 m-2 items-center rounded-full`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-s text-teal-500 itallic hover:text-white`,
  priceContainer: `flex items-center`,
  price: `mr-[0.4rem]`,
}


const basePrice = 154

const RideSelector = () => {
  const [carList, setCarList]=useState([])
  const {selectedRide, setSelectedRide, setPrice} = 
  useContext(UberContext)


useEffect(() => {
;(async () => {
  try {
    const response = await fetch ('/api/db/getRideTypes')

    const data = await response.json()
    setCarList(data.data)
    setSelectedRide(data.data)
  } catch (error) {
    console.error(error)
  }
})()
}, [])


  return (
    <div className={style.wrapper}>
      <div className={style.title}>Select the service you require:</div>
      <div className={style.carList}>
      {carList.map((car, index) => (
            <div
            key={index}
            className={`${
              selectedRide.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
             <Image
              src={car.iconUrl}
              className={style.carImage}
              alt={car}
              height={50}
              width={50}
            />
          <div className={style.carDetails}>
            <div className={style.service}>{car.service}</div>
            <div className={style.time}>10min away</div>
          </div>
          <div className={style.priceContainer}>
            <div className={style.price}>
            <Image src={ethereumLogo} alt={car} height={38} width={25} />
            {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
//   const [carList, setCarList] = useState([])
//   const { selectedRide, setSelectedRide, setPrice, basePrice } =
//     useContext(UberContext)

//   console.log(basePrice)

//   useEffect(() => {
//     ;(async () => {
//       try {
//         const response = await fetch('/api/db/getRideTypes')

//         const data = await response.json()
//         setCarList(data.data)
//         setSelectedRide(data.data[0])
//       } catch (error) {
//         console.error(error)
//       }
//     })()
//   }, [])


//   return (
//     <div className={style.wrapper}>
//       <div className={style.title}>Select the service you require:</div>
//       <div className={style.carList}>
//         {carList.map((car, index) => (
//           <div
//             key={index}
//             className={`${
//               selectedRide.service === car.service
//                 ? style.selectedCar
//                 : style.car
//             }`}
//             onClick={() => {
//               setSelectedRide(car)
//               setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
//             }}
//           >
//             <Image
//               src={car.iconUrl}
//               className={style.carImage}
//               alt={car}
//               height={50}
//               width={50}
//             />
//             <div className={style.carDetails}>
//             <div className={style.time}>5 minutes away...</div>
//               <div className={style.service}>{car.service}</div>
              
//             </div>
//             <div className={style.priceContainer}>
//               <div className={style.price}>
//               <Image src={ethereumLogo} alt={car} height={38} width={25} />
//                 {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
//               </div>
             
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export default RideSelector
