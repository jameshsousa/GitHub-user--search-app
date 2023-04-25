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

async function searchUser() {
    const searchInput = document.getElementById("searchInput");
    const username = searchInput.value;

    if (!username) {
        alert("Digite um nome de usuário válido.");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message === "Not Found") {
        showError();
    } else {
        showUserProfile(data);
    }
}

function showError() {
    const userProfile = document.getElementById("userProfile");
    const error = document.getElementById("error");

    userProfile.classList.add("hidden");
    error.classList.remove("hidden");
}

function showUserProfile(data) {


    document.getElementById("repoCount").textContent = data.public_repos;
    document.getElementById("followerCount").textContent = data.followers;
    document.getElementById("followingCount").textContent = data.following;
    document.getElementById("joinDate").textContent = new Date(data.created_at).toLocaleDateString();
    document.getElementById("location").textContent = data.location || "Não disponível";
    document.getElementById("twitter").textContent = data.twitter_username ? `@${data.twitter_username}` : "Não disponível";
}




