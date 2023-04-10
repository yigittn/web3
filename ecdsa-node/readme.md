## ECDSA Node

My aim in this project was to demonstrate the logic of blockchain transactions in a simple way. In this example, we cannot send money to someone else without our private key, and despite some bugs, my aim was to demonstrate the logic. I also showed how to sign a transaction.

![image](https://user-images.githubusercontent.com/96335654/228247771-aa1c8400-534c-4a2a-927f-d2565f398f65.png)


![image](https://user-images.githubusercontent.com/96335654/228248007-8346779d-2f74-47df-b56d-1be18983a2e4.png)


### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
