let url = new URL(location.href);
let id = url.searchParams.get('id');


let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then((user) => {
        let block = document.createElement('div');
        block.classList.add('block')

        let id = document.createElement('h2');
        id.classList.add('id')
        id.innerText = `${user.id}`

        let name = document.createElement('h2');
        name.classList.add('name')
        name.innerHTML = `Name: <span class="purple">${user.name}</span>`

        let userName = document.createElement('h2');
        userName.classList.add('user-name')
        userName.innerHTML = `Username: <span class="purple">${user.username}</span>`

        let email = document.createElement('h2');
        email.classList.add('email')
        email.innerHTML = `Email: <span class="purple">${user.email}</span>`

        let phone = document.createElement('h2');
        phone.classList.add('phone')
        phone.innerHTML = `Phone <span class="purple">${user.phone}</span>`

        let address = document.createElement('h2');
        address.classList.add('address')
        address.innerHTML = `Address:
                                      <ul>
                                          <li>City: <span class="purple">${user.address.city}</span></li>
                                          <li>Street: <span class="purple">${user.address.street}</span></li>
                                          <li>Suite: <span class="purple">${user.address.suite}</span></li>
                                          <li>Zipcode: <span class="purple">${user.address.zipcode}</span></li>
                                          <li>Geo:
                                                <ul>
                                                    <li>Lat: <span class="purple">${user.address.geo.lat}</span></li>
                                                    <li>Lng: <span class="purple">${user.address.geo.lng}</span></li>
                                                </ul>
                                          </li>
                                      </ul>`;

        let company = document.createElement('h2');
        company.classList.add('company')
        company.innerHTML =`Company:
                                    <ul>
                                        <li>Name: <span class="purple">${user.company.name}</span></li>
                                        <li>Catch phrase: <span class="purple">${user.company.catchPhrase}</span></li>
                                        <li>Bs: <span class="purple">${user.company.bs}</span></li>
                                    </ul>`;

        let webSite = document.createElement('h2');
        webSite.classList.add('website')
        webSite.innerHTML = `Website: <span class="purple">${user.website}</span>`

        wrapper.appendChild(block)
        block.append(id, name, userName, email, phone, address, company, webSite)
    });


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(promise => promise.json())
    .then((posts) => {
            let btn = document.createElement('button');
            btn.classList.add('btn')
            btn.innerText = 'posts of current user'
            wrapper.appendChild(btn)

            btn.onclick = function () {
                    postsBlock.classList.toggle('display')
            }

            let postsBlock = document.createElement('div');
            postsBlock.classList.add('postsBlock', 'display')
            wrapper.appendChild(postsBlock)

            let i = 1;
            for (const post of posts) {
               let p = document.createElement('p');
               p.classList.add('post')
               p.innerHTML =  `${i++} - <span><a class="ref" href="post-details/post-details.html?userId=${post.userId}&id=${post.id}">${post.title}</a></span>`
                    postsBlock.appendChild(p)
            }
            console.log(posts)
    });