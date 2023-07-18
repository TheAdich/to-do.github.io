const task_name = document.querySelector("#task-input");
const btn = document.querySelector("#add-btn");
const ul_container = document.querySelector(".list-container");
let delete_style = `content: "";
position: absolute;
width: 30px;
height: 30px;
background-image: url(delete_2_11zon.png);
background-position: center;
background-repeat: no-repeat;
right: -20px;`



btn.addEventListener("click", () => {
    if (task_name.value === '') {
        alert('you have not added any task');
        saveData();
    } else {
        let to_add = document.createElement("li");

        let delete_btn = document.createElement("span");
        //  delete_btn.innerText = "hi";
        delete_btn.style = delete_style;
        to_add.innerHTML = task_name.value;
        to_add.appendChild(delete_btn);


        ul_container.appendChild(to_add);

        saveData();

    }
    task_name.value = ''
        // console.log("button is clicked");

})

ul_container.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData();

    };
})

function saveData() {
    localStorage.setItem("data", ul_container.innerHTML)
}

function showData() {
    ul_container.innerHTML = localStorage.getItem("data");
}
showData();