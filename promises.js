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

function createPosts(post) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve()
            } else {
                reject('Error: Something went wrong');
            }

        }, 2000);
    });
}

// createPosts({title: 'Post Four', body: 'This is post four'})
// .then(getPosts)
// .catch(err => document.body.innerHTML = err);


// // Async / Await
// async function init() {
//    await createPosts({title: 'Post Four', body: 'This is post four'});

//    getPosts();
// }

// init();


// // Async / Await / Fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}

fetchUsers();




// ---------------------------------------

// // Promise All

// const promise1 = Promise.resolve('Hello');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye')
//     );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then((values) => console.log(values));


