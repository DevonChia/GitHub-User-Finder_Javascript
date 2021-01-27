const nameinput = document.querySelector('.search-bar'),
        profile = document.querySelector('#profile'),
        github_btn= document.querySelector('.github-btn');
        
const github = new Github;
const ui = new UI;

loadEventListeners();
function loadEventListeners(){
    nameinput.addEventListener("keyup",searchName);
    github_btn.addEventListener("click",activeGitHubDatabase)
}

function activeGitHubDatabase(){
    github_btn.style.backgroundColor = 'green';
    github_btn.id = 1;

}

function searchName(){
    const xx = activeGitHubDatabase();
    console.log(xx);
    if (nameinput.value !== ''){
        github.getUser(nameinput.value)
            .then(data => {
                if(data.data.message !== "Not Found"){
                    ui.clearAlert();
                    ui.displayUser(data)
                }
                else{
                    ui.showAlert();
                }
            })
            .catch(error => console.log(error))
    }
    else{
        profile.innerHTML='';
    }
}



