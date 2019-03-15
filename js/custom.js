var INPUT = document.querySelectorAll("textarea");
console.log(INPUT);

INPUT.onchange = function () {
    if (this.placeholder != "") {
        this.placeholder = "";
    } //if 
    else {
        this.placeholder = "MESSAGE";
    } //else
};