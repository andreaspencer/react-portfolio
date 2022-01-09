import React from "react";

function Resume() {
    return (
        <div className="columns">
            <div className="column">
                <p id="about">Resume</p>
                <hr />

                <a className="button" href={process.env.PUBLIC_URL + "../andreaspencer-resume.pdf"}>
                ✨Download My Resume Here✨
                </a>
            </div>
            <div className="column">
                <p className="bio">Skills</p>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                    <li>Sequelize</li>
                    <li>JSON</li>
                    <li>Github</li>
                    <li>Heroku</li>
                    <li>Insomnia</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;