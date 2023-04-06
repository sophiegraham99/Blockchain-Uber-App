import matplotlib.pyplot as plt; plt.rcdefaults()
import numpy as np
import matplotlib.pyplot as plt



objects = ('driverRequest()', 'viewRideRequests()', 'choseRide()', 'rideRequest()', 'sendDriverEther()')
y_pos = np.arange(len(objects))
performance = [1170,150,200,975,115]

plt.bar(y_pos, performance, align='center', alpha=0.5, width = 0.8, color=['steelblue', 'steelblue', 'steelblue', 'cadetblue', 'cadetblue'])

plt.xticks(y_pos, objects, rotation=45)

plt.ylabel('Time (micro-seconds)')
plt.xlabel('Functions')
plt.title('BlockTaxi Function Response Times')

ax = plt.gca()
ax.set_ylim([0, 1200])


plt.savefig('myfile.png', bbox_inches = "tight")
plt.show()