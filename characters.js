// Mobile menu toggle (same as script.js)
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
}

// Character data management
let allCharacters = [];
let currentFilter = 'all';

// Load characters from JSON
async function loadCharacters() {
    try {
        const response = await fetch('data/characters.json');
        if (!response.ok) {
            throw new Error('Failed to load characters');
        }
        allCharacters = await response.json();
        displayCharacters(allCharacters);
    } catch (error) {
        console.error('Error loading characters:', error);
        const grid = document.getElementById('charactersGrid');
        grid.innerHTML = '<div class="error">Failed to load characters. Please try again later.</div>';
    }
}

// Display characters in the grid
function displayCharacters(characters) {
    const grid = document.getElementById('charactersGrid');

    if (characters.length === 0) {
        grid.innerHTML = '<div class="no-results">No characters found.</div>';
        return;
    }

    grid.innerHTML = characters.map(character => `
        <div class="character-card" data-type="${character.type}">
            <a href="character-detail.html?id=${character.id}" class="character-link">
                <div class="character-image">
                    <img src="${character.image}" alt="${character.name}" loading="lazy">
                </div>
                <div class="character-info">
                    <h3>${character.name}</h3>
                    <span class="character-type">${character.type}</span>
                </div>
            </a>
        </div>
    `).join('');

    // Add animation
    animateCards();
}

// Filter characters
function filterCharacters(type) {
    currentFilter = type;

    if (type === 'all') {
        displayCharacters(allCharacters);
    } else {
        const filtered = allCharacters.filter(char => char.type === type);
        displayCharacters(filtered);
    }
}

// Filter button functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter characters
        const filter = this.getAttribute('data-filter');
        filterCharacters(filter);
    });
});

// Animate cards on load
function animateCards() {
    const cards = document.querySelectorAll('.character-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Search functionality (can be added later)
function searchCharacters(query) {
    const searchTerm = query.toLowerCase();
    const filtered = allCharacters.filter(char =>
        char.name.toLowerCase().includes(searchTerm) ||
        char.description.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filtered);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCharacters();
});

// Console message
console.log('%cGrok?! Characters', 'color: #60196d; font-size: 20px; font-weight: bold;');
console.log('%cExploring the denizens of limitless plausibility', 'color: #53c0e9; font-size: 14px;');
