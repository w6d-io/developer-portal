import React from 'react'
import { ContainerVertical } from '@duik/it'
import '@duik/it/dist/styles.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
// import Home from './Home'
import Blog from './Blog'

export default function Layout() {
  return (
    <div className="home-container">
      <Header/>
      <ContainerVertical>
        <Blog />
      </ContainerVertical>
    </div>
  )
}