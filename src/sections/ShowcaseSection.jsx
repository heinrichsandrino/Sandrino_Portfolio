import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id = "work" className="app-showcse">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT*/}
                    <div className = "first-project-wrapper">
                        <div>
                            <img src = {import.meta.env.BASE_URL + "images/project1.png"} alt= "Ryde"/>
                        </div>
                        <div className = "text-content">
                            <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                            <p>
                                asfadfdsg fgdfgdfgdfg fdgdfgdfgdfg frtyghf jghjtygfh ghfghfhgfhf ghfth
                            </p>
                        </div>
                    </div>
                    {/*RIGHT*/}
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
