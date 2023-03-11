function menu_active() {
    document.querySelector("#menu .menu_ul").classList.toggle("active_menu");
    document.querySelector("#menu .btn").classList.toggle("active_btn");
    document.querySelector("#menu .fa-bars").classList.toggle("active_bars");
    document.querySelector("#menu .fa-xmark").classList.toggle("active_xmark");
}

function eye(a) {
    if (a==1) {
        document.querySelector(".pass-slash").classList.toggle("active_bars");
        document.querySelector(".pass").classList.toggle("active_xmark");
        var x = document.getElementById("myInput_1");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    if (a==2) {
        document.querySelector(".pass-res-slash").classList.toggle("active_bars");
        document.querySelector(".pass-res").classList.toggle("active_xmark");
        var x = document.getElementById("myInput_2");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}

function close_message() {
    document.querySelector(".message").classList.toggle("close_message");
}

function input_search() {
    document.querySelector(".input_search").classList.toggle("input_active");
}