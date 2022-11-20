import React from 'react'
import "./Facebook.css"

const FacebookNav = () => {
    return <>
        <nav className="fb-nav">
            <div className="fb-nav-left">
                <div className="fb-nav-left-logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" />
                </div>

                <div className="fb-nav-left-searchbox">
                    <i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search Facebook" />
                </div>

            </div>

            <ul className="fb-nav-middle">
                <li><i className="fa-solid fa-house " id="active"></i></li>
                <li><i className="fa-solid fa-user-group"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                <li><i className="fa-solid fa-gift"></i></li>
                <li><i className="fa-solid fa-gamepad"></i></li>
            </ul>

            <ul className="fb-nav-right">
                <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/17/17704.png" />
                </li>
                <li><i className="fa-brands fa-facebook-messenger"></i></li>
                <li id="fb-notification"><i className="fa-solid fa-bell"></i></li>
                <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" />
                </li>
            </ul>
        </nav>
    </>
}

const FacebookLeft = () => {
    return <>
        <div className="fb-home-left">
            <div className="fb-home-left-box" id="fb-home-left-profile">
                <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" />
                <h2>Rahul Ji Ara</h2>
            </div>
            <div className="fb-home-left-box">
                <i class="fa-solid fa-user-group"></i>
                <h2>Friends</h2>
            </div>
            <div className="fb-home-left-box">
                <i className="fa-brands fa-youtube"></i>
                <h2>Watch</h2>
            </div>
            <div className="fb-home-left-box">
                <i class="fa-solid fa-users"></i>
                <h2>Groups</h2>
            </div>
            <div className="fb-home-left-box">
                <i class="fa-solid fa-store"></i>
                <h2>Marketplace</h2>
            </div>
            <div className="fb-home-left-box">
                <i class="fa-regular fa-clock"></i>
                <h2>Memories</h2>
            </div>
            <div className="fb-home-left-box">
                <i class="fa-solid fa-bookmark" id="bookmark-icon"></i>
                <h2>Saved</h2>
            </div>
            <div className="fb-home-left-box">
                <i class="fa-solid fa-flag" id="page-icon"></i>
                <h2>Pages</h2>
            </div>
            <div className="fb-home-left-box" >
                <i class="fa-solid fa-calendar-days" id="event-icon"></i>
                <h2>Events</h2>
            </div>
            <div className="fb-home-left-box" >
                <i class="fa-solid fa-angle-down" id="show-more-icon"></i>
                <h2>Show More</h2>
            </div>

            <hr id="devider-line" />
            <h2 className="fb-home-left-devider">Your Shortcuts</h2>
            <div className="fb-home-left-box">
                <i class="fa-solid fa-train-tram" id="train-game"></i>
                <h2>Train Station</h2>
            </div>
            <div className="fb-home-left-box">
                <i class="fa-solid fa-gun" id="shoot-game"></i>
                <h2>Shoot Out 2025</h2>
            </div>
        </div>
    </>
}
const FacebookMiddle = () => {
return<>
<div className="fb-main">
    <div className="fb-main-status">
        <div id="owner-status">
        <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" />\
            <p>  Create Story<i className="fa-solid fa-plus"></i> </p>
        </div>
        <div className="fb-main-status-card">
                <i class="fa-solid fa-user"></i>
            <img src="https://images.pexels.com/photos/8851507/pexels-photo-8851507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
           
            <p> Ro-Hit Kumar</p>
        </div>
        <div className="fb-main-status-card">
                <i class="fa-solid fa-user"></i>
            <img src="https://images.pexels.com/photos/14426182/pexels-photo-14426182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
           
            <p> Chandan Aryan</p>
        </div>
        <div className="fb-main-status-card">
                <i class="fa-solid fa-user"></i>
            <img src="https://images.pexels.com/photos/14384827/pexels-photo-14384827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
           
            <p> Gulshan Sah</p>
        </div>
        <div className="fb-main-status-card">
                <i class="fa-solid fa-user"></i>
            <img src="https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
           
            <p>Guddu Kumar</p>
        </div>
    
    </div>
    
    <div className="fb-main-post"></div>
    <div className="fb-main-create-room"></div>
    <div className="fb-main-others-post"></div>
</div>

</>
}
const FacebookRight = () => {
    return <>
        <div className="fb-home-right">
            <h2 className="fb-home-right-devider">Sponsored</h2>
            <hr id="devider-line" />

            <div className="fb-home-right-box">
                <h2 className="fb-home-right-devider">Contacts</h2>
                <div className="fb-home-right-box-icons">
                    <i class="fa-solid fa-video"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>

            </div>
            <div className="fb-home-right-contact-box">
                <i class="fa-solid fa-user online"></i>
                <p>Ro-Hit Kumar</p>
            </div>
            <div className="fb-home-right-contact-box">
                <i class="fa-solid fa-user"></i>
                <p>Ritik Ji Ara</p>
            </div>
            <div className="fb-home-right-contact-box">
                <i class="fa-solid fa-user"></i>
                <p>Gulshan Sah</p>
            </div>
            <div className="fb-home-right-contact-box">
                <i class="fa-solid fa-user online"></i>
                <p>Chandan Arayan</p>
            </div>
            <div className="fb-home-right-contact-box">
                <i class="fa-solid fa-user online"></i>
                <p>Guddu Kumar</p>
            </div>
            <div className="fb-home-right-contact-box">
                <i class="fa-solid fa-user"></i>
                <p>Abhiskek Kumar</p>
            </div>
            <div className="fb-home-right-contact-box">
                <i className="fa-solid fa-user"></i>
                <p>Amarnath Sah</p>
            </div>


            <hr id="devider-line" />
            <h2 className="fb-home-right-devider">Group Conversations</h2>
            <div className="fb-home-right-contact-box">
                <i class="fa-solid fa-plus" id="group-chat-icon"></i>
                <p>Create New Group</p>
            </div>
           
        </div>
    </>
}

const FacebookHome = () => {
    return <>
        <div className="fb-container">
            <FacebookNav />
            <div className="fb-home">
                <FacebookLeft />
                <FacebookMiddle />
                <FacebookRight />
            
            </div>
        </div>
    </>
}

export default FacebookHome
