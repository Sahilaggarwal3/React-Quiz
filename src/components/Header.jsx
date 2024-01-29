import React from 'react'
import logo from "../assets/quiz-logo.png"

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Quiz Logo" />
            <h2>React Quiz</h2>
        </header>
    )
}

export default Header

