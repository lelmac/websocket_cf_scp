# Websockets on Clound Foundry in SAP Cloud Platform
Basic example of running websockets on the Cloud Foundry  environment with an NodeJS app.
Since the SSL-Termination caused problems, the example app provides a working approach on how to use websockets on Cloud Foundry.

## How to run the example app
1. Install the dependencies:
```
npm install
```
2. Push the app to the cloudfoundry environment. Ensure that you are connected to an API Endpoint.
```
cf push
```
3. Run the client on the local machine. Make sure you change the url to your app in the code!
```
node client.js
```


