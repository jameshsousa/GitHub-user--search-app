document.getElementById("light").addEventListener("click", function() {
    document.getElementById('dark').style.display = "block";
    document.getElementById('light').style.display = "none";
    document.getElementById('test').style.background = "white";
    document.getElementById('test').style.color = "#141d2f";
});

document.getElementById("dark").addEventListener("click", function() {
    document.getElementById('light').style.display = "block";
    document.getElementById('dark').style.display = "none";
    document.getElementById('test').style.background = "#141d2f"; 
    document.getElementById('test').style.color = "white";    
});



