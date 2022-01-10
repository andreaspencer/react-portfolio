import React from "react";

function Project(props) {
    return (
        <div>
            <div className="columns">
                {props.projects.map((project) => (
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <a href={project.live}>
                                    <img className="images" src={process.env.PUBLIC_URL + project.image} alt="PlaceHolder" />
                                </a>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <p className="bio" key={project.id}>
                                        {project.title}
                                    </p>
                                    <a href={project.live} className="footer">
                                        See it Live!
                                    </a>
                                    <a href={project.repo} className="footer">
                                        Checkout the Repo!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
