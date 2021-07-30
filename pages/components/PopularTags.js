import React from 'react';

const tagsList = [
    {name: "React"},
    {name: "Docker"},
    {name: "CICD"},
    {name: "Pipeline"},
    {name: "Redis"},
    {name: "Forms"},
    {name: "CMS"}
]

export default function PopularTags() {
    return (
        <div className="popular-tags">
            <span className="popular-tags-span">Popular:</span>
            {tagsList.map(item => {
                return <button key={item.name} className="tags">{item.name}</button>
            })}
        </div>
    )
}