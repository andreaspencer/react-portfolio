import React from "react";

function About() {
    return (
    <section className='my-5'>
        <h1 id="about">Who am I?</h1>
        <img src={coverImage} className='my-2' style={{ width: "100%" }} alt="cover" />
        <p>I am a 24 year old Business school graduate currently geting my certification in full stack web developemnt. I love traveling and learning new things.
        </p>
    </section>  
    );
}

export default About;