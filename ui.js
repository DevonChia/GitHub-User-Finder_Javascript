class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
        this.topfield = document.querySelector('.header');
    }

    displayUser(data){
        const user = data.data;
        const repos = data.repos;
        this.profile.innerHTML = `
        <div class="row border">
            <div class="image-field col-md-4 p-3" >
                <img src=${user.avatar_url} style="max-width:100%">
            </div>
            <div class="particulars-field col-md-8">
                <div class="row tags p-3">
                    <h4>
                        <span class="badge badge-pill badge-primary btn-lg">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-pill badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-pill badge-danger">Following: ${user.following}</span>
                    </h4>
                </div>
                    <div class="container">
                    <div class="row details border p-2">Name: ${user.login}</div>
                    <div class="row details border p-2">Company: ${user.company}</div>
                    <div class="row details border p-2">Website/Blog: ${user.blog}</div>
                    <div class="row details border p-2">Location: ${user.location}</div>
                    <div class="row details border p-2">Member Since: ${user.created_at}</div>
                    <p class="p-2">
                        <a class="btn btn-primary btn-md" href="${user.html_url}" role="button">View Profile</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="repo-field">
                <h2>Repositories</h2>
                <div class="repo-container container mb-3 p-2"></div>
            </div>
        `
        const repofield = document.querySelector('.repo-container');
        repos.forEach(repo =>{
            repofield.innerHTML += `
            <div class="row border p-3">
                <div class="repo-name col-6">${repo.name}</div>
                <div class="repo-tags col-6">
                    <h5>
                        <span class="badge badge-info">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
                    </h5>
                </div>
            </div>
            `
        })
    }

    showAlert(){
        this.clearAlert();
        var alertmsg = document.createElement('div');
        alertmsg.className = 'alert alert-danger';
        alertmsg.innerHTML = 'No User Found';
        this.topfield.insertBefore(alertmsg,this.topfield.childNodes[0]);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove();
        }
    }
}
