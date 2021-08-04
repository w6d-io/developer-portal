import React, { useState, useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import BlogCategories from '../../components/BlogCategories'
import { sortByCategory } from '../../utils'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

export default function PostPage({
    frontmatter: { title, date, reading_time },
    slug,
    content,
    posts,
}) {
    const [categoryFilter, setCategoryFilter] = useState('')
    const [sortedPosts, setSortedPosts] = useState(posts)

    useEffect(() => {
        setSortedPosts(sortByCategory(posts, categoryFilter))
    }, [posts, categoryFilter])

    return (
        <Layout>
            <Helmet>
                <meta
                    name="description"
                    content={
                        content.length > 100
                            ? `${content.substring(0, 100)}...`
                            : content
                    }
                />
                <title>{title} - Wildcard Portal</title>
            </Helmet>
            <div className="home-container flex flex-1 justify-center">
                <div className="flex flex-col lg:flex-row p-5 max-w-screen-xl">
                    <div className="flex-2 px-5">
                        <h1 className="post_container_title">{title}</h1>
                        <p>
                            {date} • {reading_time}
                        </p>
                        <div className="post_container">
                            <div
                                className="markdown_content"
                                dangerouslySetInnerHTML={{
                                    __html: marked(content),
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <BlogCategories
                            posts={posts}
                            changeValue={(categoryFilter) => setCategoryFilter(categoryFilter)}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const files = fs.readdirSync(path.join('posts'))
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
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
            frontmatter,
            slug,
            content,
            posts,
        },
    }
}
