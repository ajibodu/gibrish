
function add_color(){
    console.log("hi clicked");
    let element = document.getElementById("hi");
    element.style.color = 'red'
}

function remove_color(){
    let element = document.getElementById("hi");
    element.style.color = 'black'
}

function display_content(){
    let content = document.getElementById("content");
    content.style.display = 'block';
}

function remove_content(){
    let content = document.getElementById("content");
    content.style.display = 'none';
}

function add_display(){
    console.log("ad display");
    let content = document.getElementById("content");
    content.classList.add("display");
}

function remove_display(){
    let content = document.getElementById("content");
    content.classList.remove("display");
}