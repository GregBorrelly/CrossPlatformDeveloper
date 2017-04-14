function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("menuBtn").style.display = "none";
     document.getElementById("closingX").style.display = "block";

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
        document.getElementById("closingX").style.display = "none";

    document.getElementById("menuBtn").style.display = "block";
}