import matplotlib.pyplot as plt
import requests
import json
import ast
url = 'http://localhost:3333/pesodia/findbyrangedates'
myObj = {
    "initialDay": "3-3-2021",
    "finalDay": "10-3-2021",
    "idGado": 3
}

x = requests.post(url, json=myObj)


data = json.loads(x.text)
i = 0
dataPloty = list(range(5))
dataPlotx = list(range(5))
for value in data:
    print(value)
    dataPloty[i] = value['ganhoPeso']
    dataPlotx[i] = value['dia']
    i = i+1

plt.plot(dataPlotx, dataPloty)
#plt.ylabel('some numbers')
plt.show()
