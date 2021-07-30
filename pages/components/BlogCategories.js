import React from 'react';
import { TopBarTitle, NavLink } from '@duik/it';
import { orderReleasesByDate } from '../../utils';

function OwnNavLink({ leftElement, title, rightElement }) {
    return(
        <div className="ownnavlink_container">
            <img className="ownnavlink_container_img" src={leftElement}/>
            <p className="ownnavlink_container_title">{title}</p>
            <p className="ownnavlink_container_span">{rightElement}</p>
        </div>
    )
}

function Categories({ posts, changeValue }) {
    const getCategories = [];
    posts.map(post => {
        getCategories.push(post.frontmatter.category)
    });
    const sortedArr = getCategories.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    const structuredArr = Object.entries(sortedArr).map(([key, value]) => {
        return {
            title: key,
            count: value
        }
    })

    return (
        <div className="categories_container">
            <TopBarTitle className="categories_container_title">Categories</TopBarTitle>
            <NavLink className="categories_container_item" onClick={() => changeValue('All')}>All</NavLink>
            {structuredArr.map((post, index) => {
                return <NavLink 
                    key={index} 
                    rightEl={post.count} 
                    className="categories_container_item"
                    onClick={() => changeValue(post.title)}
                >
                    {post.title}
                </NavLink>
            })}
        </div>
    )
}

function LatestReleases({ posts }) {
    const getReleases = [];
    posts.map(post => {
        getReleases.push(post.frontmatter)
    })
    getReleases.sort(orderReleasesByDate);

    return (
        <div className="categories_container">
            <TopBarTitle className="categories_container_title">Latest Releases</TopBarTitle>
            {getReleases.map((release, index) => {
                return <OwnNavLink
                    key={index}
                    leftElement={release.post_logo} 
                    title={release.app} 
                    rightElement={release.type}
                />              
            })}
        </div>
    )
}

export default function BlogCategories({ posts, changeValue }) {
    return (
        <div>
            <Categories posts={posts} changeValue={changeValue}/>
            <LatestReleases posts={posts} />
        </div>
    )
}