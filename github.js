class Github{
    constructor(){
        this.repos_count = 5;
        this.access_token = 'token f2804e69b25590001fa138a67b20767ea6d61eb2';
    }

    async getUser(user){
        const data_response = await fetch(`https://api.github.com/users/${user}`,{
            headers:{
                'Authorization' : this.access_token,
            }
        })
        
        const repo_response = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=created&direction=desc`,{
            headers: {
                'Authorization' : this.access_token,
            }
        })
        console.log(data_response);
        const data = await data_response.json();
        const repos = await repo_response.json();

        return {
            data,
            repos
        }
    }
}