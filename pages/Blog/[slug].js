import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import BlogCategories from '../components/BlogCategories'
import Header from '../components/Header'
import { sortByValue } from '../../utils'

export default function PostPage({ frontmatter: {title, date, reading_time}, slug, content, posts }) {
    const [value, setValue] = useState("");
    const sortedPosts = [];
    if (value) {
        sortedPosts.push(sortByValue(posts, value))
    } else {
        sortedPosts.push(posts)
    }
    return (
        <div className="home-container">
            <title>{title} - Wildcard Portal</title>
            <Header />
            <div className="blog_container">
                <div>
                    <h1 className="post_container_title">{title}</h1>
                    <p>{date} • {reading_time}</p>
                    <div className="post_container">
                        <div className="test" dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                    </div>
                </div>
                <div>
                    <BlogCategories posts={posts} changeValue={value => setValue(value)}/>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const files = fs.readdirSync(path.join('posts'));
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
    const {data: frontmatter, content} = matter(markdownWithMeta)
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
            frontmatter,
            slug,
            content,
            posts
        },
    }
}