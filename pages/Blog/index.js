import React, { useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCategories from '../components/BlogCategories'
import Link from 'next/link'
import { sortByDate, sortByValue } from '../../utils'
import Layout from '../components/Layout'

export default function Blog({ posts }) {
    const [value, setValue] = useState('')
    const sortedPosts = []

    if (value) {
        sortedPosts.push(sortByValue(posts, value))
    } else if (value == 'All') {
        sortedPosts.push(posts)
    } else {
        sortedPosts.push(posts)
    }

    return (
        <Layout>
            <div className="home-container flex flex-1 justify-center">
                <div className="flex flex-col p-5 lg:flex-row max-w-screen-xl">
                    <div className="flex-2 px-5">
                        {sortedPosts[0].map((post, index) => {
                            return (
                                <div
                                    key={index}
                                    className="posts_preview flex flex-row"
                                >
                                    <div className="flex-0 px-3 w-1/4">
                                        <img
                                            layout="fill"
                                            alt={post.frontmatter.title}
                                            className="posts_previewimg"
                                            src={post.frontmatter.post_logo}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Link href={`/blog/${post.slug}`}>
                                            <a className="posts_title">
                                                {post.frontmatter.title}
                                            </a>
                                        </Link>
                                        <p className="posts_previewtext-date">
                                            {post.frontmatter.date} •{' '}
                                            {post.frontmatter.reading_time}
                                        </p>
                                        <p className="posts_previewtext">
                                            {post.frontmatter.preview}
                                        </p>
                                        {post.frontmatter.preview ? (
                                            <Link href={`/blog/${post.slug}`}>
                                                <a className="posts_seemore">
                                                    read this article
                                                </a>
                                            </Link>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex-1">
                        <BlogCategories
                            posts={posts}
                            changeValue={(value) => setValue(value)}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )
        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}
