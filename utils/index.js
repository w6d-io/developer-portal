export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const orderReleasesByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date)
}

export const sortByCategory = (posts, category) => {
    const _posts = [];
    if (category != 'All') { 
        posts.map(post => {
            if (post.frontmatter.category == category)
                _posts.push(post)
        })
    } else {
        return posts
    }
    return _posts;
}