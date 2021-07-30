import React from 'react'
import { ContainerVertical } from '@duik/it'
import '@duik/it/dist/styles.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import PopularTags from './components/PopularTags'
import HomeCards from './components/HomeCards'

export default function Home() {
    return (
        <ContainerVertical>
            <title>Home - Wildcard Portal</title>
            <div className="banner">
                <h1 style={{ fontSize: "26px" }}>What do you want to learn today?</h1>
                <SearchBar />
                <PopularTags />
            </div>
            <HomeCards />
            <HomeCards />
        </ContainerVertical>
    )
}