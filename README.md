Steps to get verified:

1. Issue a credential from issuer

2. Use Polygon ID App to scan the QR code, import the issued credential

3. Go to server folder, run `npm start` to start the verifier server

4. Open ngrok CLI, run `ngrok http --domain usefully-blessed-sunbird.ngrok-free.app 8080` to expose the verifier server to the internet

5. Go to front-end folder, tun `npm start` to start the front-end page

6. Use the Polygon ID App to scan the QR code and get verified
