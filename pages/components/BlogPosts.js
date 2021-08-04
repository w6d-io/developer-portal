import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Link from 'next/link'
import BlogCategories from './BlogCategories'
import { sortByCategory } from '../../utils'

export default function BlogPosts({ posts }) {
    const [categoryFilter, setCategoryFilter] = useState('')
    const [sortedPosts, setSortedPosts] = useState(posts || [])

    useEffect(() => {
        if (categoryFilter) {
            setSortedPosts(sortByCategory(posts, categoryFilter))
        }
    }, [posts, categoryFilter])

    return (
        <Layout>
            <div className="home-container flex flex-1 justify-center">
                <div className="flex flex-col p-5 lg:flex-row max-w-screen-xl">
                    <div className="flex-2 px-5">
                        {sortedPosts?.map((post, index) => {
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
                            posts={sortedPosts}
                            changeValue={(value) => setCategoryFilter(value)}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
