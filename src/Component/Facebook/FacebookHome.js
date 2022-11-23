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
            <i class="fa-solid fa-bars" id="fb-menu-icon"></i>


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
    return <>
        <div className="fb-main">
            <div className="fb-main-status">
                <div id="owner-status">
                    <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" />
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

            <div className="fb-main-post">
                <div className="fb-main-post-upper">
                    <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" />
                    <input type="text"
                        placeholder="What's on your mind Rahul?" />
                </div>
                <hr id="post-devider" />
                <div className="fb-main-post-lower  ">
                    <p><i class="fa-solid fa-video" id="post-video"></i> Live video </p>
                    <p> <i class="fa-solid fa-image" id="post-image"></i>Photo/video</p>
                    <p> <i class="fa-regular fa-face-smile" id="post-feeling"></i> Feeling/activity</p>
                </div>


            </div>


            <div className="fb-main-create-room">
                <p><i class="fa-solid fa-video"></i> Create Room </p>
                <i class="fa-solid fa-user online active-user"></i>
                <i class="fa-solid fa-user online active-user"></i>
                <i class="fa-solid fa-user online active-user"></i>
            </div>



            <div className="fb-main-others-post">
                <div className="fb-main-others-post-header">
                    <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" />
                    <div className="others-post-title">
                        <div>
                            <span>Rahul Ji Ara </span> is with <span> Guddu Kumar </span>
                            and 6 others
                        </div>
                        <div> November 21, 2021 ‧ <i class="fa-solid fa-earth-asia"></i></div>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>

                <div className="others-post-image">
                    <img src="https://images.pexels.com/photos/2405039/pexels-photo-2405039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="fb-main-others-post-footer">
                    <div className="fb-main-others-post-footer-upper">
                        <p>  <i class="fa-solid fa-thumbs-up"></i>10k</p>
                        <p>894 Comments</p>
                    </div>
                    <hr id="post-devider" />
                    <div className="fb-main-others-post-footer-bottom">
                        <p><i class="fa-solid fa-thumbs-up" id="post-like"></i>Like</p>
                        <p><i class="fa-regular fa-message" id="post-comment"></i>Comment</p>
                        <p><i class="fa-solid fa-share"></i>Share</p>
                    </div>
                </div>
                <hr id="post-devider" />
                <div className="comments">
                    <p>View 10 more comments</p>
                    <div className="comments-upper">
                        <i class="fa-solid fa-user active-user"></i>
                        <p> <span>Guddu Kumar</span> <br />
                            <span> Nice Pic Bro</span>
                        </p>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    <div className="comments-middle">
                        <div className="comments-middle-reaction"><p> <span>Like </span>
                            <span>Reply</span>
                            <span>1y</span>
                        </p></div>
                        <div className="comments-middle-reply">
                            <span> ⤷ </span>
                            <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" />
                            <p> Rahul Ji Ara replied ‧ 11 Reply </p>
                        </div>

                    </div>
                    <div className="comments-footer-write-comment">
                        <img src="https://cdn-icons-png.flaticon.com/512/2810/2810494.png" className="online" />
                        <input type="text" placeholder="Write a comment... "
                        />
                        <div className="comments-footer-write-comment-icons">
                            <img src="https://cdn-icons-png.flaticon.com/512/134/134819.png" />
                            <img src="https://cdn-icons-png.flaticon.com/512/569/569501.png" />
                            <img src="https://cdn-icons-png.flaticon.com/512/685/685655.png" />
                            <img src="https://cdn-icons-png.flaticon.com/512/739/739272.png" />
                            <img src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png" />
                        </div>
                    </div>
                    <p> Press Enter to post</p>

                </div>

            </div>
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
