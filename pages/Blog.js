import React, { useState } from 'react';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCategories from './components/BlogCategories'
// import Header from './components/Header'
import Link from 'next/link'
import { sortByDate, sortByValue } from '../utils'

export default function Blog({ posts }) {
    const [value, setValue] = useState("");
    const sortedPosts = [];

    if (value) {
        sortedPosts.push(sortByValue(posts, value))
    } else if (value == 'All') {
        sortedPosts.push(posts)
    } else {
        sortedPosts.push(posts)
    }

    return (
        <div className="home-container">
            <title>Blog - Wildcard Portal</title>
            {/* <Header /> */}
            <div className="blog_container">
                <div className="posts_list">
                    {sortedPosts[0].map((post, index) => {
                        return (
                            <div key={index} className="posts_preview">
                                <div>
                                    <img className="posts_previewimg" src={post.frontmatter.post_logo} />
                                </div>
                                <div>
                                    <Link href={`developer-portal/Blog/${post.slug}`}><a className="posts_title">{post.frontmatter.title}</a></Link>
                                    <p className="posts_previewtext-date">{post.frontmatter.date} • {post.frontmatter.reading_time}</p>
                                    <p className="posts_previewtext">{post.frontmatter.preview}</p>
                                    {post.frontmatter.preview ? <Link href={`/developer-portal/Blog/${post.slug}`}><a className="posts_seemore">read more</a></Link> : ''}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <BlogCategories posts={posts} changeValue={value => setValue(value)}/>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));
    const posts = files.map(filename => {
        const slug = filename.replace('.mdx', '')
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    }
}