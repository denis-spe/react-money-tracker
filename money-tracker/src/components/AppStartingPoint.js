/**
 * Praise Ye The Lord
 */

/**
 * App starting point.
 */

// Import libraries
import React from "react";

function AppStartingPointButton(props) {
    return(
        <button 
            onClick={props.onClick}
            className={props.text + "-button"}>
            {props.text}
        </button>
    )
}

class AppStartingPoint extends React.Component {
    render(){
        return(
            <div className="app-staring-point-container">
                <p>Money can be hard to save.</p>
                <p>Get to know how you save your money on daily basis.</p>

                <div>
                    <AppStartingPointButton 
                        onClick={this.props.clickOnLogin}
                        text="login" />
                    <AppStartingPointButton 
                        onClick={this.props.ClickOnGetStarted}
                        text="Get Started" />
                </div>
            </div>
        )
    }
}

export default AppStartingPoint;