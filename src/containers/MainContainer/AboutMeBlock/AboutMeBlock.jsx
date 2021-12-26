import React from 'react'
import './AboutMeBlock.css'


const AboutMeBlock = () => {
    return (
        <div className="box">
            <h1>About me</h1>
            <hr />
            <div className="about-block">
            <div className="block">
            <ul>
                <b>Baimyrsa Temirlan</b>
                <hr />
                <li>01.08.2004</li>
                <li>Student at school</li>
            </ul>
            </div>
        <div className="block">
            <ul><b>Front-end(JavaScript)</b>
            <hr />
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS,SCSS</li>
                <li>Jquery</li>
                <li>DOM</li>
                <li>БЭМ</li>
                <li>HTTP, Rest API, Json</li>
                <li>Fetch</li>
                <li>Ajax</li>
            </ul>
            </div>
        <div className="block">
            <ul><b>Education</b>
            <hr />
                <li>Attractor school (HTML,CSS,JS)</li>
                <li>CodifyLAb  (React)</li>
            </ul>
        </div>
        </div>
        <hr />
        </div>
    )
}

export default AboutMeBlock
