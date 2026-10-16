function bootConsole() {
    window.location.href = 'profiles.html';
}

// --- ANIMATED TRANSITIONS ---

// Transition from Profiles Screen -> Dashboard Screen with animation
function selectProfile(profileName) {
    localStorage.setItem('ps5_user', profileName);
    
    // Select the profile card container or body to animate out
    const container = document.querySelector('.profile-wrapper') || document.body;
    container.classList.add('fade-out');
    
    // Wait for animation to complete before changing the page URL
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 350);
}

// Transition from Main Dashboard -> Game Hub View with animation
function openGameHub(gameName, gameKey) {
    const data = gamesData[gameKey];
    if (!data) return;

    const homeView = document.getElementById('home-view');
    
    // Trigger smooth fade-out on the home grid
    homeView.classList.add('fade-out');

    setTimeout(() => {
        // Populate hub content
        document.getElementById('hub-title').innerText = data.title;
        document.getElementById('hub-tagline').innerText = data.tagline;
        document.getElementById('hub-icon-badge').innerText = data.icon;
        
        const heroBg = document.getElementById('hub-bg');
        heroBg.className = 'hub-hero-bg ' + data.bgClass;

        // Switch active views
        homeView.classList.remove('active', 'fade-out');
        
        const hubView = document.getElementById('game-hub-view');
        hubView.classList.add('active');
    }, 300);
}

// Transition back from Game Hub -> Main Dashboard with animation
function closeGameHub() {
    const hubView = document.getElementById('game-hub-view');
    hubView.classList.add('fade-out');

    setTimeout(() => {
        hubView.classList.remove('active', 'fade-out');
        
        const homeView = document.getElementById('home-view');
        homeView.classList.add('active');
    }, 300);
}
window.addEventListener('DOMContentLoaded', () => {
    const userBadges = document.querySelectorAll('#current-user-display, #hub-user-display');
    const savedUser = localStorage.getItem('ps5_user');
    if (savedUser) {
        userBadges.forEach(badge => {
            if (badge) badge.innerText = savedUser;
        });
    }
});

// --- NEW GAME HUB VIEW LOGIC ---

// Game details database for the dynamic hub view
// Game details database for the dynamic hub view
const gamesData = {
    minecraft: {
        title: "Minecraft",
        tagline: "Explore, build and conquer!",
        bgClass: "minecraft-bg",
        icon: "⛏️",
        progress: "65%",
        playtime: "42h"
    },
    ghostoftsushima: {
        title: "Ghost of Tsushima",
        tagline: "A storm is coming. Forge your own path.",
        bgClass: "ghostoftsushima-bg",
        icon: "🗡️",
        progress: "88%",
        playtime: "64h"
    },
    spiderman2: {
        title: "Spider-Man 2",
        tagline: "Be Greater. Together.",
        bgClass: "spiderman2-bg",
        icon: "🕷️",
        progress: "100%",
        playtime: "35h"
    },
    store: {
        title: "PlayStation Store",
        tagline: "Find your next great adventure.",
        bgClass: "store-bg",
        icon: "🛍️",
        progress: "N/A",
        playtime: "Store"
    }
};



function launchGame() {
    const currentTitle = document.getElementById('hub-title').innerText;
    
    // Add a quick fade out before opening the separate HTML file
    document.body.classList.add('fade-out');
    
    setTimeout(() => {
        window.location.href = 'game_hub.html';
    }, 350);
}