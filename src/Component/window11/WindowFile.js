import React from 'react'
import "./WindowFile.css"

//  Inside My Pc 
const pcIconImg = <img src="https://cdn-icons-png.flaticon.com/512/1865/1865273.png" id="my-pc-icon" />
const downloadFolderIconImg = <img src="https://cdn-icons-png.flaticon.com/512/8156/8156539.png" />
const imageFolderIconImg = <img src="https://cdn-icons-png.flaticon.com/512/2889/2889377.png" />
const musicFolderIconImg = <img src="https://cdn-icons-png.flaticon.com/512/4085/4085212.png" />
const videoFolderIconImg = <img src="https://cdn-icons-png.flaticon.com/512/440/440856.png" />
const documentFolderIconImg = <img src="https://cdn-icons-png.flaticon.com/512/7932/7932980.png" />
const desktopFolderIconImg = <img src="/img/desktop-folder-icon.png" />
const cDriveIconImg = <img src="/img/c-drive-icon.png" />



const starIcon = <i className="fa-solid fa-star" id="star-icon"></i>
const pcIcon = <i className="fa-solid fa-desktop" id="pc-icon"></i>
const plusIcon = <i className="fa-solid fa-plus" id="plus-icon"></i>
const angleDown = <i className="fa-solid fa-angle-down" id="angle-down"></i>
const cutIcon = <i className="fa-solid fa-scissors" id="cut-icon"></i>
const copyIcon = <i className="fa-regular fa-copy" id="copy-icon"></i>
const pasteIcon = <i className="fa-solid fa-paste" id="paste-icon"></i>
const renameIcon = <i className="fa-solid fa-pen-to-square" id="rename-icon"></i>
const shareIcon = <i className="fa-solid fa-share-from-square" id="share-icon"></i>
const deleteIcon = <i className="fa-solid fa-trash" id="delete-icon"></i>
const upDownIcon = <span id="up-down-arrow">&#8645;</span>
const oneDriveIcon = <i className="fa-solid fa-cloud" id="onedrive-icon"></i>
const reloadIcon = <i className="fa-solid fa-rotate-right" id="reload-icon"></i>
const angleRight = <i className="fa-solid fa-angle-right" id="angle-right"></i>
const rightArrow = <i className="fa-solid fa-arrow-right" id="right-arrow"></i>
const leftArrow = <i className="fa-solid fa-arrow-left" id="left-arrow"></i>
const toptArrow = <i className="fa-solid fa-arrow-up" id="up-arrow"></i>
const listIcon = <i className="fa-solid fa-list" id="list-icon"></i>
const minusIcon = <i className="fa-solid fa-minus" id="minus-icon"></i>
const squareIcon = <i className="fa-regular fa-square" id="square-icon"></i>
const xIcon = <i className="fa-solid fa-xmark" id="x-icon"></i>
const dotMenu = <i className="fa-solid fa-ellipsis" id="dot-menu"></i>
const searchIcon = <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>

const WindowFile = () => {
    return <>
        <div className="windows-files-container">
            <div className="windows-files-header1">
                <p> {pcIconImg} This PC</p>
                <div className="header1-col">
                    <div className="windows-files-header1-col1">
                        {plusIcon} <p>New</p> {angleDown}
                    </div>
                    {/* <hr /> */}
                    <div className="windows-files-header1-col2">
                        {cutIcon}
                        {copyIcon}
                        {pasteIcon}
                        {renameIcon}
                        {deleteIcon}
                    </div>
                    {/* <hr /> */}
                    <div className="windows-files-header1-col3">
                        {upDownIcon} Sort {angleDown}
                    </div>
                    <div className="windows-files-header1-col4">
                        {listIcon} View {angleDown}
                    </div>
                    {/* <hr /> */}
                    <div className="windows-files-header1-col5">
                        {dotMenu}
                    </div>
                </div>
            </div>
            <div className="windows-files-header2">
                <div className="windows-files-header2-left">
                    {leftArrow}
                    {rightArrow}
                    {angleDown}
                    {toptArrow}
                </div>
                <div className="windows-files-header2-middle">
                    {starIcon}
                    {angleRight}
                    <input type="text" placeholder="Quick access" />
                    {angleDown}
                    {reloadIcon}
                </div>
                <div className="windows-files-header2-right">
                    {searchIcon}
                    <input type="text" placeholder="Search Quick access" />
                </div>
            </div>
            <div className="windows-folder">

                <div className="windows-folder-left">
                    <div className="windows-folder-left-top1">
                        <p>{angleRight} {starIcon} Quick access</p>
                    </div>
                    <div className="windows-folder-left-top2">
                        <p>{angleRight} {oneDriveIcon} OneDrive - Personal</p>
                    </div>
                    <div className="windows-folder-left-top3">
                        <p>{angleDown} {pcIcon} This Pc </p>
                        <ul>
                            <li> {angleRight} {desktopFolderIconImg} Desktop</li>
                            <li> {angleRight} {documentFolderIconImg} Documents</li>
                            <li> {angleRight} {downloadFolderIconImg} Downloads</li>
                            <li> {angleRight} {musicFolderIconImg} Music</li>
                            <li> {angleRight} {imageFolderIconImg} Pictures</li>
                            <li> {angleRight} {videoFolderIconImg} Videos</li>






                        </ul>
                    </div>
                </div>

                <div className="windows-folder-right">
                    <div className="windows-folder-right-top">
                        <div className="folder-hr">
                            <p> {angleDown} Devices and drives (1) </p>

                        </div>
                        <div className="windows-folder-right-top-list">
                            <div className="windows-folder-card">
                                {desktopFolderIconImg}
                                Desktop
                            </div>
                            <div className="windows-folder-card">
                                {documentFolderIconImg}
                                Documents
                            </div>
                            <div className="windows-folder-card">
                                {downloadFolderIconImg}
                                Downloads
                            </div>
                            <div className="windows-folder-card">
                                {musicFolderIconImg}
                                Music
                            </div>
                            <div className="windows-folder-card">
                                {imageFolderIconImg}
                                Pictures
                            </div>
                            <div className="windows-folder-card">
                                {videoFolderIconImg}
                                Videos
                            </div>

                        </div>
                    </div>

                    <div className="windows-folder-right-bottom">
                        <div className="folder-hr">
                            <p> {angleDown} Devices and drives (1) </p>
                        </div>
                        <div className="windows-folder-right-bottom-list">
                            <div className="windows-folder-right-bottom-card">
                                {cDriveIconImg}
                                <div className="windows-folder-right-bottom-card-disc">
                                    <p>Window (C)</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-filler"></div>
                                    </div>
                                    <p>70 GB free of 250 GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default WindowFile
