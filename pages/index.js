import React from 'react'
import { ContainerVertical } from '@duik/it'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import Blog from './Blog'
/* Blog as Homepage START */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import Link from 'next/link'
/* Blog as Homepage END */

export default function Layout({posts}) {
  return (
    <div className="home-container">
      <Header/>
      <ContainerVertical>
        <Blog posts={posts} />
      </ContainerVertical>
    </div>
  )
}

/* Blog as Homepage START */

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
      const slug = filename.replace('.md', '')
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

/* Blog as Homepage END */