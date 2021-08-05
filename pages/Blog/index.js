import React, { useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCategories from '../../components/BlogCategories'
import Link from 'next/link'
import { sortByDate, sortByCategory } from '../../utils'
import Layout from '../../components/Layout'
import BlogPosts from '../../components/BlogPosts'
import { useRouter } from 'next/router'

export default function Blog({ posts }) {
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return <BlogPosts posts={posts} />
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
