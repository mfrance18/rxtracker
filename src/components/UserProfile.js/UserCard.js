import React from "react";
import UserPicture from "../../images/blankprofile.png"
import "./User.css"

export const UserCard = () => {
    let userName = sessionStorage.getItem("rxtracker_username")
    let userImage = sessionStorage.getItem("rxtracker_image")




    if (!userImage) {
        return (
            <div>
                <h2 className="intro">Welcome, {userName}!</h2>
                <img className="introPic" src={userImage} alt="User Image" style={{ "pointer-events": "all" }} />
            </div>
        )
    } else {
        return (
            <section>
                <div className="intro">
                    <h2>Welcome, {userName}!</h2>
                </div>
                <div className="img__wrap">
                    <div>
                        <p class="img__description">Click To Add Image</p>
                    </div>
                    <div>
                        <img className="NoPic" src={UserPicture} alt="User Image" />
                    </div>
                </div>
            </section>
        )

    }
}