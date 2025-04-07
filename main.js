let userHtml = document.querySelector("#userHtml")
let paginationHtml = document.querySelector(".pagination")


class UserModel{

    limit = 3
   
    

    get users(){
        let users = window.localStorage.getItem("users")

        return JSON.parse(users) || userData
    }


    renderUsers(pagination=1){
        userHtml.innerHTML = null

        let page = this.users.slice((pagination-1)*this.limit, pagination*this.limit)

        for( let user of page){
       userHtml.innerHTML+= getUserHtml(user)
           
    }

    }


    renderPagination(){

        let buttonLength = Math.ceil(this.users.length / this.limit)

        for(let i = 1 ; i<=buttonLength; i++){

            paginationHtml.innerHTML += getpaginationHtml(i)

        }

    }


  



}



function pagination(el){
   
    let p= el.lastElementChild.textContent
    userModel.renderUsers(p)
}


let userModel = new UserModel()

userModel.renderUsers()
userModel.renderPagination()

console.log(userModel.users);





















































































            


document.addEventListener("DOMContentLoaded", () => {
    
    Search();
    Edit();
    Delete();
    
});


function Search() {
    let searchInput = document.querySelector("#search_input");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            let filter = searchInput.value.toLowerCase();
            let rows = document.querySelectorAll("tbody tr");
            rows.forEach(row => {
                let name = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
                if (name.includes(filter)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
}
function Edit() {
    
}


function Delete() {
    document.addEventListener("click", event => {
        let trashIcon = event.target.closest("i.fa-trash");
        if (trashIcon) {
            let row = trashIcon.closest("tr");
            if (row) {
                row.remove();
            } else {
                
                alert("o'chirilmadi")
            }
        }
    });
}

function addUser() {
    
    var name = document.querySelector('input[name="name"]').value;
    var username = document.querySelector('input[name="username"]').value;
    var email = document.querySelector('input[type="text"][placeholder="user@example.com"]').value;
    var about = document.querySelector('textarea[placeholder="My Bio"]').value;

    var userHtml = `
     <tr>
    <td class="align-middle">
      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
        <input type="checkbox" class="custom-control-input" id="item-1">
        <label class="custom-control-label" for="item-1"></label>
      </div>
    </td>
    <td class="text-nowrap align-middle">${name}</td>
    <td class="text-nowrap align-middle"><span>2024-04-07</span></td>
    <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-off"></i></td>
    <td class="text-center align-middle">
      <div class="btn-group align-top">
          <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
          <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button>
      </div>
    </td>
  </tr>
    `

  
    document.getElementById('userHtml').innerHTML += userHtml;

  

}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn.btn-primary').addEventListener('click', function(event) {
        event.preventDefault();
        addUser(); 
    });
});
