import React from "react";
import Project from "../Project";

const projects = [
    {
        id: 0,
        title: "Daily Horoscope",
        image: "../img/daily-horoscope.png",
        repo: "https://github.com/cybertnl/mid-project",
        live: "https://cybertnl.github.io/mid-project/mainpage.html"
    },
    {
        id: 1,
        title: "StayKations",
        image: "../img/staykation.png",
        repo: "https://github.com/andreaspencer/staykation-project2",
        live: "https://staykation-project2.herokuapp.com/"
    },
    {
        id: 2,
        title: "Note Taker",
        image: "../img/note-taker.png",
        repo: "https://github.com/andreaspencer/note-taker",
        live: "https://challenge10-notetaker.herokuapp.com/", 
    },
    {
        id: 3,
        title: "Work Day Scheduler",
        image: "../img/workday-scheduler.png",
        repo: "https://github.com/andreaspencer/work-day-scheduler",
        live: "https://andreaspencer.github.io/work-day-scheduler/"
    },
    {
        id: 4,
        title: "Coding Quiz",
        image: "../img/code-quiz.png",
        repo: "https://github.com/andreaspencer/coding-quiz",
        live: "https://andreaspencer.github.io/coding-quiz/"
    },
    {
        id: 5,
        title: "Horiseon Homepage",
        image: "../img/horiseon-homepage.png",
        repo: "https://github.com/andreaspencer/andreaspencer.github.io",
        live: "andreaspencer.github.io"
    }
];

function Portfolio() {
    return (
        <div>
            <p id="about">Portfolio</p>
            <hr />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;