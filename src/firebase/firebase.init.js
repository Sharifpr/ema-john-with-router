import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenticaton = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthenticaton;

/*
--------------------------
steps for authentication
--------------------------

=> step-01: initial setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method


=> step-02: setup component
1. create login component
2. create register component
3. create route for login and register


=> step-03: set auth system
1. setup sign in method
2. setup sign Out method
3. user State
4. special observer
5. return necessary methods and states


=> step-04: create auth context hook (useAuth)
1. create a auth context
2. create context provider
3. set conext provider context value
4. use auth provider
5. create useAuth hook


=> step-05: create private route
1. create private route
2. set private route


=> step-05: redirect after login
1. after login redirect user to their desired destination

*/



