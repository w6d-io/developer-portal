import React from 'react'
import { ContainerVertical } from '@duik/it'
import Helmet from 'react-helmet'
import Header from './components/Header'
import Home from './Home'
import Blog from './blog/index'
import Layout from './components/Layout'
/* Blog as Homepage START */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import Link from 'next/link'
/* Blog as Homepage END */

export default function IndexPage({ posts }) {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta
                    name="description"
                    content="The best no-code continuous integration platform for your business devOps. Build your visual pipeline and integrate third party apps into your builds and deployment."
                />
                <title>
                    Wildcard Continuous Integration CI/CD Platform Blog
                </title>
            </Helmet>
            <Blog posts={posts} />
        </>
    )
}

/* Blog as Homepage START */

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

/* Blog as Homepage END */
