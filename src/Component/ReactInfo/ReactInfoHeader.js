import React from 'react'
import ReactInfoNav from './ReactInfoNav'
import "./ReactInfoHeader.css"

const ReactInfoHeader = () => {
    return (
        <div className="header">
            <ReactInfoNav/>
            <h1>React</h1>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
            <ul>
                <li>Was first released in 2013.</li>
                <li>was created by jordan walkie.</li>
                <li>Has well over 200k star on github.</li>
                <li>Maintaind by facebook.</li>
                <li>Power thousandsd of enterprise app, including mobile apps.</li>
            </ul>
        </div>
    )
}

export default ReactInfoHeader
