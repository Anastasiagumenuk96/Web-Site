window.onload = function() {
    var button = document.getElementById("but");
    var div = document.getElementById("intro");
    
    button.onclick = function() {

        if(div.style.background != "black") {
            document.getElementById("inner").hidden = true;
            div.style.background = "black";
            div.style.height = "100vh";
            div.style.width = "100%";
            document.getElementById("login-form").hidden = true;
        }
        else {
            div.style.background = "transparent";
            document.getElementById('inner').hidden = false;
            div.style.height = "auto";
            div.style.width = "100%";
            document.getElementById('nav').style.background = "transparent";
            document.getElementById("login-form").hidden = false;
        }
    };
};