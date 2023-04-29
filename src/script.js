
const light = document.getElementById("light");

light.addEventListener("click", () => {
    document.getElementById('dark').style.display = "flex";
    document.getElementById('light').style.display = "none";
    document.getElementById('test').style.background = "white";
    document.getElementById('test').style.color = "#141d2f";
    document.getElementById('nav').style.background = "white";
    document.getElementById('main').style.background = "white";
    document.getElementById('nav').style.border = "0.1rem solid #141d2f";
    document.getElementById('main').style.border = "0.1rem solid #141d2f";
    document.querySelectorAll("input[type='text']")[0].style.background = "white";
    document.querySelector("input::placeholder").style.color = "#FFFFFF";
    document.getElementsByClass('.data-git')[0].style.border = "0.1rem solid #141d2f";
    document.getElementsByClassName('.data-git')[0].style.background = "#1E2A47"; 
       
});

const dark = document.getElementById("dark");

dark.addEventListener("click", () => {
    document.getElementById('light').style.display = "flex";
    document.getElementById('dark').style.display = "none";
    document.getElementById('test').style.background = "#141d2f"; 
    document.getElementById('test').style.color = "white";
    document.getElementById('nav').style.background = "#1E2A47";
    document.getElementById('main').style.background = "#1E2A47";
    document.querySelector("input[type='text']").style.background = "#1E2A47";
    document.querySelector("input::placeholder").style.color = "#1E2A47";    
    document.querySelector("body").style.background = "#FFFFFF";
    document.getElementByClassName('.data-git')[0].style.background = "white";
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

    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("repoCount").textContent = data.public_repos;
    document.getElementById("followerCount").textContent = data.followers;
    document.getElementById("followingCount").textContent = data.following;
    document.getElementById("joinDate").textContent = new Date(data.created_at).toLocaleDateString();
    document.getElementById("location").textContent = data.location || "Não disponível";
    document.getElementById("twitter").textContent = data.twitter_username ? `@${data.twitter_username}` : "Não disponível";
    document.getElementById("company").textContent = data.company || "Não disponível";
    document.getElementById("website").textContent = data.blog || "Não disponível";
    document.getElementById("bio").textContent = data.bio || "About não disponível";  
}




