import React from "react";

function Project(props) {
    return (
        <div>
            <div className="mx-4 flex-row">
                {props.projects.map((project) => (
                    <div className="mx-6">
                        <div className="card">
                            <div className="card-image">
                                <a href={project.live}>
                                    <img src={process.env.PUBLIC_URL + project.image} alt="PlaceHolder" />
                                </a>
                            </div>
                            <div className="card-content">
                                <div className="">
                                    <p className="title" key={project.id}>
                                        {project.title}
                                    </p>
                                    <a href={project.live} className="livelink">
                                        See it Live!
                                    </a>
                                    <a href={project.repo} className="repolink">
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
