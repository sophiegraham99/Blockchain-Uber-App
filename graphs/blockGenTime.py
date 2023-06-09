import matplotlib.pyplot as plt
import numpy as np

y1 = np.array([14,22,16,15,21,12,11,10,8,12,15,19,15,20,15,18,10,18,19,23,7,6,6,12,8,22,7,18,9,21,20,20,10,9,25,8,7,12,22,10,8,11,13,18,18,5,9,7,7,10,15,22,15,22,14,13,26,10,10,12,9,16,13,17,24,12,8,18,19,22,21,26,18,12,9,9,15,9,20,19,7,9,17,17,18,20,16,19,9,12,19,20,8,15,10,12,10,18,25,22])
y2 = np.array([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15])
y3 = np.array([14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56,14.56])

plt.plot(y1, c = 'steelblue', linewidth=1, label = "Time Taken")
plt.plot(y2, c = 'black', linestyle = 'dashed', linewidth=1, label = "Rinkeby Average Time Taken")
plt.plot(y3, c = 'mediumseagreen', linewidth=1, label = "Average Time Taken")

plt.ylabel('Time (s)')
plt.xlabel('Test Number')
plt.title('Average Time Taken to Generate a Block')
plt.legend(bbox_to_anchor=(1.02, 1), loc='upper left', borderaxespad=0)

plt.savefig('myfile.png', bbox_inches = "tight")
plt.show()