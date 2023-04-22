document.getElementById("light").addEventListener("click", function() {
    document.getElementById('dark').style.display = "block";
    document.getElementById('light').style.display = "none";
    document.getElementsByTagName('body').style.background = "white";
});

document.getElementById("dark").addEventListener("click", function() {
    document.getElementById('light').style.display = "block";
    document.getElementById('dark').style.display = "none";
    document.getElementsByTagName('body').style.background = "#141d2f";
    document.getElementsByTagName('body').style.color = "white";
});



