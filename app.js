const nameinput = document.querySelector('.search-bar'),
        profile = document.querySelector('#profile');
        
const github = new Github;
const ui = new UI;

loadEventListeners();
function loadEventListeners(){
    nameinput.addEventListener("keyup",searchName)
}

function searchName(){
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



