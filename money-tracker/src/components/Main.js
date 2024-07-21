/**
 * Praise Ye The Lord.
 */

/**
 * App Main section.
 */

// Import libraries
import React from "react";
import AppStartingPoint from "./AppStartingPoint";
import Login from "./Login";
import Register from "./Register";


class Main extends React.Component {
    state = {
        login: false,
        getStarted: false
    }

    AuthButtonClick(auth){
        this.setState({
            ...this.state,
            [auth]: !this.state[auth],
        })
    }

    render(){
        const appStartingPointing = <AppStartingPoint 
            clickOnLogin={() => this.AuthButtonClick("login")}
            ClickOnGetStarted={() => this.AuthButtonClick("getStarted")} />

        const login = <Login />
        const register = <Register />


        return(
            <main className="main-container">
                {
                    this.state.login ? 
                        login : this.state.getStarted ? 
                            register : appStartingPointing
                }
                
            </main>
        )
    }
}

export default Main;