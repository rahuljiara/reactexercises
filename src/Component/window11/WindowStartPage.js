import React from 'react'
import "./WindowStartPage.css"


const StartAppList = [
  {
    id: 1,
    img: "/img/edge-icon.png",
    name: "Edge"
  },
  {
    id: 2,
    img: "/img/drive-icon.png",
    name: "Drive"
  },
  {
    id: 3,
    img: "/img/ebay-icon.png",
    name: "Ebay"
  },
  {
    id: 4,
    img: "/img/asus-icon.png",
    name: "Asus"
  },
  {
    id: 5,
    img: "/img/linkedin-icon.png",
    name: "Linked"
  },
  {
    id: 6,
    img: "/img/outlook-icon.png",
    name: "Outlook"
  },
  {
    id: 7,
    img: "/img/onenote-icon.png",
    name: "OneNote"
  },
  {
    id: 8,
    img: "/img/vlc-icon.png",
    name: "VLC"
  },
  {
    id: 9,
    img: "/img/vs-studio-icon.png",
    name: "VS Std"
  },
  {
    id: 10,
    img: "/img/ms-excel-icon.png",
    name: "Excel"
  },
  {
    id: 11,
    img: "/img/ms-word-icon.png",
    name: "Word"
  },
  {
    id: 12,
    img: "/img/blogger-icon.png",
    name: "Blogger"
  },
  {
    id: 13,
    img: "/img/cmd-icon.png",
    name: "CMD"
  },
  {
    id: 14,
    img: "/img/recycle-bin-icon.png",
    name: "Bin"
  }

]

const AppList = (props) => {
  return <>
    <div className="window-Start-Page-apps-card">
      <img src={props.img} />
      <p>{props.name}</p>
    </div>

  </>
}
const WindowStartPage = (props) => {
  return <>


    <div className="window-Start-Page-container-card">
      <div className="window-Start-Page-search">
        <input type="text"
          placeholder="Type here to search" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="window-Start-Page-row1">
        <h3>Pinned</h3>
        <p> All apps <i class="fa-solid fa-angle-right"></i> </p>
      </div>
      <div className="window-Start-Page-apps">
        {
          StartAppList.map(x =>
            < AppList
              key={x.id}
              img={x.img}
              name={x.name}
            />


          )
        }
      </div>
      <h3>Recommended</h3>
      <p>To show your recent files and new apps, turn them on in <span>Start settings</span></p>

      <hr />
      <div className="window-Start-Page-row2">
        <div className="window-Start-Page-row2-account">
          <i class="fa-solid fa-user"></i>
          <p> Rahul Ji Ara</p>
        </div>
        <div className="window-Start-Page-row2-power">
          <i class="fa-solid fa-power-off"></i>
        </div>

      </div>
    </div>
  </>
}

export default WindowStartPage
