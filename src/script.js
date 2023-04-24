document.getElementById("light").addEventListener("click", function() {
    document.getElementById('dark').style.display = "flex";
    document.getElementById('light').style.display = "none";
    document.getElementById('test').style.background = "white";
    document.getElementById('test').style.color = "#141d2f";
    document.getElementById('nav').style.background = "white";
    document.getElementById('main').style.background = "white";
    document.getElementById('nav').style.border = "0.1rem solid #141d2f";
    document.getElementById('main').style.border = "0.1rem solid #141d2f";
      
});

document.getElementById("dark").addEventListener("click", function() {
    document.getElementById('light').style.display = "flex";
    document.getElementById('dark').style.display = "none";
    document.getElementById('test').style.background = "#141d2f"; 
    document.getElementById('test').style.color = "white";
    document.getElementById('nav').style.background = "#1E2A47";
    document.getElementById('main').style.background = "#1E2A47";    
});



