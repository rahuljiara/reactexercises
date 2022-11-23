import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"



const ProjectList = [
    {
        id: "1",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "2",
        name: "AirBNB",
        logo: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png",
        link: "/project/airbnb"
    },
    {
        id: "3",
        name: "Facebook",
        logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
        link: "/project/facebook"
    },
    {
        id: "4",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "5",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "6",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "7",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "8",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "9",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "10",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "11",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    },
    {
        id: "12",
        name: "React Info",
        logo: "../../img/logo192.png",
        link: "/project/react-info"
    }
]


const ProjectCard = (props) => {
    return (

        <Link to={props.link}><div className="project-card">
            <div className="project-logo"><img src={props.logo} /></div>
            <div className="project-title"><h2>{props.name}</h2></div>
        </div>
        </Link>
    )
}

const Home = () => {
    return <>
        <div className="container">
            <div className="head">
            <h1>FrontEnd Exercise</h1>
            <p>advance styling . . .</p>
            </div> 
            <div className="project-container">
                {ProjectList.map((x) =>
                    <ProjectCard
                        key={x.id}
                        name={x.name}
                        logo={x.logo}
                        link={x.link}
                    />
                )
                }
            </div>
        </div>
    </>
}

export default Home
