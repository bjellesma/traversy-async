const posts = [
    {
        title: 'Post One',
        body: 'Post body one'
    },
    {
        title: 'Post two',
        body: 'Post body two'
    }
]
/**
 * Get all posts every second
 */
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

/**
 * function to create a new post after a specified timeout sec
 * @param {} post 
 */
function createPost(post, time) {
    setTimeout(() => {
        posts.push(post)
    },time)
}

function createPostCallback(post, time, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    },time)
}

/**
 * Use a promise to perform an action on resolution
 */
function createPostPromise(post, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;

            if(!error){
                resolve()
            }else{
                reject('Error')
            }
        }, time)
    })
}

getPosts();

createPost({
    title: 'Post three', 
    body: 'Post 3 body'
}, 500)

createPost({
    title: 'Post four', 
    body: 'Post 4 body'
}, 750)

// Note that post 5 is not created because the timeout of two seconds is longer than the interval of getting the post
createPost({
    title: 'Post five', 
    body: 'Post 5 body'
}, 2000)

//if we call this postCallback function, we'll wait two seconds and then get the remainder of th posts
createPostCallback({
    title: 'Post five', 
    body: 'Post 5 body'
}, 2000, getPosts)

// Post six will only get the posts when the promise resolves
createPostPromise({
    title: 'Post six', 
    body: 'Post 6 body'
}, 3000).then(() => {
   getPosts() 
}).catch((err) => {
    console.log(err)
})

/**
 * wait for createPost to finish before proceeding
 */
async function init(){
    await createPost({
        title: 'Post seven', 
        body: 'Post 7 body'
    }, 4000)

    getPosts()
}

async function getUser(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users')

    const data = await res.json()

    console.log(data)
}

init()