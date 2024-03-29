const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
    {title: 'Post Three', body: 'This is post three'}
];

function getPosts() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


createPosts({title: 'Post Four', body: 'This is post four'}, getPosts);