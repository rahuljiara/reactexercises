import React from 'react'
import { useState } from 'react'
import "./Airbnb.css"

const AirbnbNav = () => {
    const [airbnbNavStyle, setAirbnbNavStyle] = useState({
        maxHeight: "0vh"
    })

    const airbnbNavToggle = () => {
        console.log("object")
        if (airbnbNavStyle.maxHeight == "0vh") {
            setAirbnbNavStyle({
                maxHeight: "100vh",
            })
        }
        else{
            setAirbnbNavStyle({
                maxHeight: "0vh"
            })
        }

    }
    return <>
        <nav className="airbnb-nav-container">
            <div className="airbnb-nav-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" />
                <h1>airbnb</h1>
            </div>

            <ul style={airbnbNavStyle}>
                <li>Become a host</li>
                <li>help</li>
                <li>sign up</li>
                <li>log in</li>
            </ul>
            <i class="fa-solid fa-bars" id="airbnb-menu-icon" onClick={airbnbNavToggle}></i>
        </nav>
    </>
}



const AirbnbHome = () => {
    return (
        <div className="airbnb-containter">
            <AirbnbNav />

            <div className="airbnb-home">
                <div className="left">
                    <div className="airbnb-card">
                        <h2>Find places to stay on Airbnb</h2>
                        <p>
                            Discover entire homes and private rooms perfect for any trip.
                        </p>
                        <form>
                            <div className="form-row">
                                <div className="form-row-col1"><h2>Location</h2>
                                    <input type="text" placeholder="Anywhere" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-row-col2"><h2>Check In</h2>
                                    <input type="date" required/>
                                </div>
                                <hr className="hr" />
                                <div className="form-row-col2"><h2>Check Out</h2>
                                    <input type="date" required/>
                                </div>

                            </div>
                            <div className="form-row">
                                <div className="form-row-col2"><h2>Adult</h2>
                                    <select required>
                                        <option value="0">FrontEnd</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <hr className="hr" />
                                <div className="form-row-col2"><h2>Children</h2>
                                    <select required>
                                        <option value="0">Exercise - 2</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>

                            </div>

                            <button type="submit" className="submit-btn">Search</button>

                        </form>
                    </div>
                </div>
                <div className="right">
                    <img src="https://a0.muscache.com/im/pictures/09efb5fc-7bf1-44c0-b0ef-241a38533e67.jpg?im_w=1680" />
                </div>
            </div>
        </div>
    )
}

export default AirbnbHome
