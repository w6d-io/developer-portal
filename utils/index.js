export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const orderReleasesByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date)
}

export const sortByValue = (array, value) => {
    const posts = [];
    if (value != 'All') { 
        array.map(post => {
            if (post.frontmatter.category == value)
                posts.push(post)
        })
    } else {
        array.map(post => {
            posts.push(post)
        })
    }
    return posts;
}