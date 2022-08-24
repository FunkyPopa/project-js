let url = new URL(location.href);
let id = url.searchParams.get('id');
let userId = url.searchParams.get('userId')


let wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper)

let postsInfo = document.createElement('div');
postsInfo.classList.add('postInfo')

let comentsWrapper = document.createElement('div');
comentsWrapper.classList.add('comentsWrapper')

wrapper.append(postsInfo, comentsWrapper)

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(promise => promise.json())
    .then((posts) => {
        for (const post of posts) {
            if(post.id == id) {

                let userId = document.createElement('h2');
                userId.innerHTML = `User ID: <span class="purple">${post.userId}</span>`

                let id = document.createElement('h2')
                id.innerHTML = `ID: <span class="purple">${post.id}</span>`

                let title = document.createElement('h2')
                title.innerHTML = `Title: <span class="purple">${post.title}</span>`

                let body = document.createElement('h2')
                body.innerHTML = `Body: <span class="purple">${post.body}</span>`


                postsInfo.append(userId, id, title, body)
            }
        }
    });




fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(promise => promise.json())
    .then((coments) => {
        for (const coment of coments) {

        let block = document.createElement('div');
        block.classList.add('block')
        comentsWrapper.appendChild(block)

        let postId = document.createElement('h2');
        postId.innerHTML = `Post ID: <span class="purple">${coment.postId}</span>`

        let id = document.createElement('h2');
        id.innerHTML = `ID: <span class="purple">${coment.id}</span>`

        let name = document.createElement('h2');
        name.innerHTML = `Name: <span class="purple">${coment.name}</span>`

        let body = document.createElement('h2');
        body.innerHTML = `Body: <span class="purple">${coment.body}</span>`

        let email = document.createElement('h2')
        email.innerHTML = `Email: <span class="purple">${coment.email}</span>`


        block.append(postId, id, name, body, email)

        }
    });