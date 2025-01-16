const pathName = window.location.pathname;
const pageName = pathName.split("/").pop()

if(pageName == "home.html"){
    document.querySelector(".home").classList.add("active")
}

if(pageName == "about.html"){
    document.querySelector(".about").classList.add("active")
}

if(pageName == "contact.html"){
    document.querySelector(".contact").classList.add("active")
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}
