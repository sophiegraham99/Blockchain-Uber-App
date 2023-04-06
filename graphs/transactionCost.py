import matplotlib.pyplot as plt; plt.rcdefaults()
import numpy as np
import matplotlib.pyplot as plt



objects = ('driverRequest()', 'viewRideRequests()', 'choseRide()', 'rideRequest()', 'sendDriverEther()')
y_pos = np.arange(len(objects))
performance = [0.04399,0.006146,0.004741,0.03912,0.007552]

plt.bar(y_pos, performance, align='center', alpha=0.5, width = 0.8, color=['steelblue', 'steelblue', 'steelblue', 'cadetblue', 'cadetblue'])

plt.xticks(y_pos, objects, rotation=45)

plt.ylabel('Transaction Cost (USD)')
plt.xlabel('Functions')
plt.title('BlockTaxi USD/Transaction')


plt.savefig('myfile.png', bbox_inches = "tight")
plt.show()