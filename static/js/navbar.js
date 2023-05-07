function navbarFunction() {
    if(window.innerWidth <= 600){
        var x = document.getElementById("navigationBar");
        if (x.className === "topnav") {
            x.className += " responsive";
            navbarVisibility("visible")
            document.getElementById("profile").style.marginTop = "144px"
        } 
        else {
            x.className = "topnav";
            navbarVisibility("hidden")
            document.getElementById("profile").style.marginTop = "70px"
        }
    }
}

function navbarVisibility(visibility){
    navBarItems = document.getElementById("navigationBar").getElementsByTagName("a")
    for(var i = 0; i < navBarItems.length - 1; i++){
        navBarItems[i].style.visibility = visibility
    }
}

if(window.innerWidth <= 600){
    navbarVisibility("hidden")
}
