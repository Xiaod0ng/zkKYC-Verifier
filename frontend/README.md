# How to run locally

## 1. Install frontend dependencies with --legacy-peer-deps

Make sure to run the install command with the --legacy-peer-deps flag.

```bash
npm i --legacy-peer-deps
```

Unfortunately some of the dependencies are mid migration and use different legacy versions of typescript, so you need to run the command and all other dependency installations with the flag or you'll see installation errors. When installing any other dependencies in this project, use the flag.

## 2. Create a .env file

In the .env file, specify two variables:

```
# The ngrok URL host the server
REACT_APP_VERIFICATION_SERVER_PUBLIC_URL="https://yourapp.ngrok-free.app"

REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL="http://localhost:8080"
```

## 3. Start the frontend

```bash
npm start
```

Visit http://localhost:3000/
