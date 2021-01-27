class Github{
    constructor(){
        this.repos_count = 5;
        this.access_token = 'token e97203ad5816f6c5499061f6a26b681dc46096e';
        this.github_access = document.querySelector(".github-btn");
    }

    async getUser(user){
        const data_response = await fetch(`https://api.github.com/users/${user}`,{
            headers:{
                'Authorization' : this.access_token + this.github_access.id,
            }
        })
        
        const repo_response = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=created&direction=desc`,{
            headers: {
                'Authorization' : this.access_token + this.github_access.id,
            }
        })
        const data = await data_response.json();
        const repos = await repo_response.json();

        return {
            data,
            repos
        }
    }
}