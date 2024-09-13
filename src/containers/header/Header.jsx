import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit natus
                    pariatur nam quam vitae exercitationem ullam assumenda architecto deserunt?
                    Exercitationem?
                </p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address." />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="img" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className="gpt3__header-image">
                <img src={ai} alt="img" />
            </div>
        </div>
    );
};

export default Header;
