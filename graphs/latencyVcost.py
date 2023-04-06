import matplotlib.pyplot as plt
import numpy as np

y1 = np.array([55,54,57,55,56,54,52,51,48,45,46,47,44,42,43,32,33,31,29,28,26,25,25,22,21,20,23,19,36,34,31,28,25,25,27,28,25,22,18,20,18,17,16,17,19,23,23,20,25, 24, 20,17,18,15,14,16,11,10,9,9])

X = np.array([2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019])

plt.plot(y1, c = 'steelblue', linewidth=1, label = "TxTime")


plt.ylabel('Tx Time (s)')
plt.xlabel('Gas Price (gwei)')
plt.title('Transaction Latency Vs Gas Price')



plt.savefig('myfile.png', bbox_inches = "tight")
plt.show()