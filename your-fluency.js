const data = async() => {
    const request = await fetch('https://jsonplaceholder.typicode.com/todos');
    const response = await request.json();
    return response
}

const getCompleted = async() => {
    const users = await data()
    return users.filter(user => user.completed === true)
}
console.log(getCompleted());

const userUncompleted = async() => {
    const users = await data();
    return users.filter(user => user.completed === false)
}
userUncompleted()

const userIdTasks = async(id) => {
    const users = await data()
    return users.filter(user => user.userId === id)
}
userIdTasks()

const idTask = async(id) => {
    const users = await data()
    const user = users.filter(user => user.userId)
    return user.title
}

const urgentTitle = async(id) => {
    const users = await data()
    return users.map(user => (user.title).toUpperCase())
}

const newData = async() => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await request.json();
    return response
}

const getPost = async(id) => {
    const posts = await newData()
    const user = posts.filter(post => post.id === id)

    return user.body
}

const userPosts = async(id) => {
    const posts = await newData()
    const user = posts.filter(post => post.userId === id)

    return user.body
}

const longestPosts = async(id) => {
    const posts = await newData()
    return posts.reduce(post => a.length > b.length ? a : b)
}

const properTitle = async(id) => {
    const posts = await newData()
    const postwords = posts.forEach(post => {
        return post.title.split(' ')
    })
    console.log(postwords)
    // const space = postwords.forEach(post => {
    //     return
    // })
}
properTitle()

const identify = async() => {
    const posts = await newData()
    return posts.map(post => `User${post.userId}: ${post.title}`)
}
console.log(identify())
