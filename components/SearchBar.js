import React from 'react'
import { Select, ButtonGroup, Button } from '@duik/it'

const optionsCategories = [
    { label: "All Categories", value: 1 },
    { label: "Documentation", value: 2 },
    { label: "Tutorials", value: 3 },
    { label: "Blog", value: 4 },
    { label: "Events", value: 5 },
]

export default function SearchBar() {
    return (
        <ButtonGroup lg>
            <input className="search-bar-input" type="text" placeholder="Search framework, database, process, etc."></input>
            <Select className="search-bar-select" options={optionsCategories} defaultOption={optionsCategories[0]} />
            <Button className="search-bar-button" primary>Search</Button>
        </ButtonGroup>
    )
}