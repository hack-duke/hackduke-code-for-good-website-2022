import React from "react";
import "./FAQ.css";
import { useState } from "react";

function Note({ title, text, flipped, i, setFlipped, color }) {
    return (
        <div className="column is-one-third-desktop is-half-tablet">
            <a
                onClick={() => {
                    setFlipped({ ...flipped, [i]: !flipped[i] });
                    console.log(flipped);
                }}>
                <div className="note" id={color}>
                    <img
                        className="note-tacks"
                        src={"/Tacks/tack_" + color + ".svg"}></img>
                    {Object.hasOwn(flipped, i) && flipped[i] ? (
                        <div className="note-text">{text}</div>
                    ) : (
                        <div className="note-title">{title}</div>
                    )}
                </div>
            </a>
        </div>
    );
}

const cards = [
    {
        color: "blue",
        title: "When is the application deadline?",
        text: "Applications will close on Sunday, September 30 at 11:59 PM EST, and all decisions will be released by Saturday, October 8. We hope to see you all there, so make sure to apply!",
    },
    {
        color: "yellow",
        title: "Who can I work with?",
        text: "Anyone! You are welcome to work alone, but we definitely recommend working with a team and get to know your fellow programmers from Duke and other schools! Teams can have up to five students, no exceptions. The only request that we have is that you make a new friend and learn something new by talking to each other, our mentors, and our experts!",
    },
    {
        color: "purple",
        title: "In-person or hybrid?",
        text: "If you're a Duke student, you are welcome to attend the event in person. For other universities, students who are vaccinated are welcome to join us on campus (subject to approval and changing university policies). However, we will not be providing travel reimbursements for students traveling from other schools (carpoolers may reach out to our team to potentially be reimbursed for parking costs). ",
    },
    {
        color: "green",
        title: "When? Where?",
        text: "Code for Good starts Saturday, October 22 at 9:00 AM EST and ends Sunday, October 23 at 6:30 PM EST. \nIt will be hosted on Duke University's West Campus, in and around the Engineering Quad. Most activities will be taking place in the Fitzpatrick Center (CIEMAS) and Hudson Hall. All links and info will be included in our hacker guide, which will be sent out before the event begins.",
    },
    {
        color: "red",
        title: "What if I’m new to coding?",
        text: "We welcome everyone to apply, regardless of your background in tech! Even if you have limited coding or technical experience, we will have plenty of talks and workshops scheduled to introduce you to a plethora of different tools and technologies. We will also have mentors available throughout the weekend to help out if you ever get stuck or run out of ideas.",
    },
    {
        color: "yellow",
        title: "What can I make?",
        text: "We welcome all software and hardware hacks that align with our tracks. Our mission is to code for social good, so make sure to create a project that is impactful for the track you have chosen! We will also have lab space and limited equipment available for hardware projects.",
    },
    {
        color: "blue",
        title: "Who can participate?",
        text: "You can participate as long as you're a student (undergraduate or graduate) 18 years or older. If you are a new grad, we’d love to have you as well! We aim to be beginner-friendly, so, all are welcome! ",
    },
    {
        color: "green",
        title: "What should I bring?",
        text: "Bring your laptop, chargers, ethernet cables (or just use Wi-Fi), potential toiletries/sleeping bags, and a spirit to Code for Good!",
    },
    {
        color: "blue",
        title: "How can I get involved or help?",
        text: "In you are interested in volunteering and helping out with the day-of logistics, please send us an email at hackers@hackduke.org. \nIf you are interested in mentoring hackers with tech or track-specific knowledge, drop us an email at hackers@hackduke.org. \nTo get involved with sponsorship opportunities, reach out to us at sponsorship@hackduke.org!",
    },
    {
        color: "red",
        title: "Will there be prizes?",
        text: "Yes! There will be grand prize and novice winners for each track. For these track winners, the reward is a donation under your name to charities and causes! In addition, there will also be many company-sponsored prizes. These often come with the requirement that you incorporate certain technologies into your project. ",
    },
    {
        color: "purple",
        title: "What is the Covid policy?",
        text: "Note: Everything is subject to change to align with Duke University’s Covid policies and regulations. \nAll students who are vaccinated are welcome to join us on campus and attend the event in-person. As per current regulations, masks are no longer required, except in classrooms.",
    },
    {
        color: "yellow",
        title: "What if I still have questions?",
        text: "Shoot us an email at hackers@hackduke.org, and we'll be sure to get back to you as soon as we can!",
    },
];

function FAQ() {
    const [flipped, setFlipped] = useState({});
    return (
        <div id="FAQ" className="FAQ">
            <h2>FAQ</h2>
            <div className="FAQ-content columns is-multiline is-variable is-4">
                {cards.map((e, i) => {
                    return (
                        <>
                            <Note
                                title={e.title}
                                text={e.text}
                                flipped={flipped}
                                setFlipped={setFlipped}
                                i={i}
                                color={e.color}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default FAQ;
