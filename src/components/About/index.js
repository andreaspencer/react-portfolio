import React from "react";


function About() {
    return (
    <section className='mx-5'>
        <h1 id="about">Who am I?</h1>
        <img className='my-pic' src={process.env.PUBLIC_URL + '../img/coverimage.png'} style={{ width: "100%" }} alt="cover" />
        <p className="bio">Hi my name is Andrea. I am a 23 year old CSUN Graduate with a
        Bachelors in Business Management. I am currently enrolled in UCLA
        Coding Bootcamp for my certificate in Full Stack Web Development.
        I live in Los Angeles but call many places my home. I try to
        travel as much as I can. I enjoy meeting new people and experiencing
        different cultures. Trying new things and finding my way in life has been
        a challenge but I've learned alot from other people and always
        try to better myself.
        </p>
    </section>  
    );
}

export default About;