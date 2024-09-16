import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
    {
        title: "Improving end distrusts instantly",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
        title: "Become the tended active",
        text: "Request ask so disposed as  elegance. Extensive therefore supported by extremity",
    },
    {
        title: "Message or am nothing",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
        title: " Really boy law county",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
];

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just Need to Realize It. Step into Future Today. &
                    Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    );
};

export default Features;
