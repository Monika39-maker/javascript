const APIURL = 'https://api.github.com/users/';
const mainEl = document.getElementById('mainEl');
const input = document.querySelector('input')
const form = document.querySelector('form');

getUser('florinpop')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    var username = input.value; 
    getUser(username)
    input.value = ''   
});


async function getUser(username) {
    
    mainEl.innerHTML = ''
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    console.log(respData)

    const respForRepos = await fetch(APIURL + username + '/repos')
    const repos = await respForRepos.json();
    console.log(repos)


    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.innerHTML = `<img src="${respData.avatar_url}" alt="image"/>
    <div class="user-info">
        <h1>${respData.login}</h1>
        <div class="icons">
            <i class="far fa-thumbs-up">${respData.followers}</i>
            <i class="fas fa-eye">${respData.following}</i>

        </div>
    </div>
    <div class="pop">
        <h4>Most Popular Repositories</h4>
        <ul>
            ${repos.map(repo => {
                return `<li>
                <a href='${repo.html_url}' target='_blank'>
                ${repo.full_name}</a></li>`
            }).sort((a, b) => {
                return a.fork_count - b.fork_count
            }).slice(0, 9)}
        </ul>
        
        
    </div>`
    mainEl.appendChild(cardEl)
    
}
