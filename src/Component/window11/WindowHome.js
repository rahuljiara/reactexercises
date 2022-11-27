import React from 'react'
import { useState } from 'react'
import "./WindowHome.css"
import WindowFile from './WindowFile'
import WindowStartPage from "./WindowStartPage"


const pcIconImg = <img src="https://cdn-icons-png.flaticon.com/512/1865/1865273.png" id="my-pc-icon" />
const recycleBinIconImg = <img src="../img/recycle-bin-icon.png" id="recycle-bin-icon" />
//  Software for desktop 
const vlc = <img src="/img/vlc-icon.png" />
const vsStd = <img src="/img/vs-studio-icon.png" />
const excel = <img src="/img/ms-excel-icon.png" />
const word = <img src="/img/ms-word-icon.png" />
const notepadIconImg = <img src="https://cdn-icons-png.flaticon.com/512/686/686234.png" id="notepad-icon" />
const edgeBrowserIconImg = <img src="/img/edge-icon.png" id="edge-icon" />
const angleUpArrowIcon = <i className="fa-solid fa-angle-up" id="arrow-icon"></i>
const keyboardIcon = <i className="fa-regular fa-keyboard" id="keyboard-icon"></i>
const wifiIcon = <i className="fa-solid fa-wifi" id="wifi-icon"></i>
const speakerIcon = <i className="fa-solid fa-volume-high" id="speaker-icon"></i>
const batteryIcon = <i className="fa-solid fa-battery-three-quarters" id="battery-icon"></i>
const windowIconImg = <img src="/img/windows-11-icon.png" id="start-icon" />
const msStoreIconImg = <img src="/img/ms-store-icon.png" id="store-icon" />
const folderIconImg = <img src="https://cdn-icons-png.flaticon.com/512/3767/3767094.png" id="folder-icon" />



const WindowHome = () => {
  const [showPage, setShowPage] = useState(false);
  const [showFilePage, setShowFilePage] = useState(false);
  const startPageToggle = () => {
    if (showPage == false) {
      setShowPage(true)
    } else {
      setShowPage(false)
    }
  }
  const filePageToggle = () => {
    if (showFilePage == false) {
      setShowFilePage(true)
    } else {
      setShowFilePage(false)
    }
  }

  return <>

    <div className="windows-container">
      <div className="windows-desktop">
        <div className="software">
          <div onClick={filePageToggle}>
            {pcIconImg}

          </div>
          {edgeBrowserIconImg}
          {excel}
          {word}
          {vsStd}
          {vlc}
          {msStoreIconImg}
          {notepadIconImg}
          {recycleBinIconImg}
        </div>
      </div>



      <div className="windows-taskbar">
        <div onClick={startPageToggle}>
          {windowIconImg}
        </div>
        {
          showPage && (<WindowStartPage />)
        }
        <div onClick={filePageToggle}>
          {folderIconImg}
        </div>
        {
          showFilePage && (<WindowFile />)
        }
        {msStoreIconImg}
        {notepadIconImg}
        {edgeBrowserIconImg}

        <div className="windows-taskbar-tools">
          {angleUpArrowIcon}
          {keyboardIcon}
          <div className="windows-taskbar-tools-lang">
            <p>ENG</p>
            <p>IN</p>
          </div>

          <div className="windows-taskbar-tools-network">
            {wifiIcon}
            {speakerIcon}
            {batteryIcon}
          </div>
          <div className="windows-taskbar-tools-calander">
            <p> {new Date().getHours()} : {new Date().getMinutes()}</p>
            <p>{new Date().getDate()}-{new Date().getMonth() + 1}-{new Date("2021-03-25").getFullYear()}</p>

          </div>
        </div>
      </div>
    </div>


  </>
}

export default WindowHome

