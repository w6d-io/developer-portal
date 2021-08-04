import React from 'react';
import { IoAlbumsOutline } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from 'next/image'

const cardsDatas = [
    {
        icon: "https://image.flaticon.com/icons/png/512/235/235251.png",
        title: "Documentation",
        caption: "Enjoy the comfort of having your dev process in one place."
    },
    {
        icon: "https://image.flaticon.com/icons/png/512/432/432579.png",
        title: "Tutorials",
        caption: "Watch others do what you need to do in our videos!"
    },
    {
        icon: "https://image.flaticon.com/icons/png/512/432/432587.png",
        title: "APIs",
        caption: "Be able to integrate any third party software right now!"
    },
    {
        icon: "https://image.flaticon.com/icons/png/512/425/425908.png",
        title: "Contact us",
        caption: "Still struggling buddy? Contact Linda, she is happy to help."
    }
]

function Card(props) {
    return (
        <div className="homecards-card">
            <img layout='fill' alt={props.title} src={props.icon} />
            <p className="homecards-cardtitle">{props.title}</p>
            <span className="homecards-cardcaption">{props.caption}</span>
            <span className="homecards-seemore">See more <HiOutlineArrowNarrowRight /></span>
        </div>
    )
}

export default function HomeCards() {
    return (
        <div className="homecards-container">
            {cardsDatas.map(item => {
                return <Card key={item.title} title={item.title} caption={item.caption} icon={item.icon}/>
            })}
        </div>
    )
}