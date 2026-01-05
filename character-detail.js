// Mobile menu toggle
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

// Get character ID from URL
function getCharacterId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load all characters
let allCharacters = [];

async function loadAllCharacters() {
    try {
        const response = await fetch('data/characters.json');
        if (!response.ok) {
            throw new Error('Failed to load characters');
        }
        allCharacters = await response.json();
        return allCharacters;
    } catch (error) {
        console.error('Error loading characters:', error);
        throw error;
    }
}

// Find character by ID
function findCharacter(id) {
    return allCharacters.find(char => char.id === id);
}

// Display character details
function displayCharacter(character) {
    const detailContainer = document.getElementById('characterDetail');
    const breadcrumbName = document.getElementById('breadcrumbName');

    // Update page title and breadcrumb
    document.title = `${character.name} - Grok?! Zine`;
    breadcrumbName.textContent = character.name;

    detailContainer.innerHTML = `
        <div class="character-detail-grid">
            <div class="character-detail-image">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="character-detail-content">
                <span class="character-type-badge">${character.type}</span>
                <h1>${character.name}</h1>
                <div class="character-description">
                    <p>${character.description}</p>
                </div>
                <div class="character-actions">
                    <a href="characters.html" class="btn btn-secondary">Back to All Characters</a>
                </div>
            </div>
        </div>
    `;

    // Display related characters if any
    if (character.relatedCharacters && character.relatedCharacters.length > 0) {
        displayRelatedCharacters(character.relatedCharacters);
    }
}

// Display related characters
function displayRelatedCharacters(relatedIds) {
    const relatedSection = document.getElementById('relatedSection');
    const relatedGrid = document.getElementById('relatedCharacters');

    const relatedCharacters = relatedIds
        .map(id => findCharacter(id))
        .filter(char => char !== undefined);

    if (relatedCharacters.length === 0) {
        return;
    }

    relatedSection.style.display = 'block';
    relatedGrid.innerHTML = relatedCharacters.map(character => `
        <div class="character-card-small">
            <a href="character-detail.html?id=${character.id}">
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
            </a>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', async function() {
    const characterId = getCharacterId();

    if (!characterId) {
        const detailContainer = document.getElementById('characterDetail');
        detailContainer.innerHTML = `
            <div class="error">
                <h2>No character specified</h2>
                <p>Please select a character from the <a href="characters.html">characters page</a>.</p>
            </div>
        `;
        return;
    }

    try {
        await loadAllCharacters();
        const character = findCharacter(characterId);

        if (!character) {
            const detailContainer = document.getElementById('characterDetail');
            detailContainer.innerHTML = `
                <div class="error">
                    <h2>Character not found</h2>
                    <p>The character you're looking for doesn't exist. <a href="characters.html">Browse all characters</a>.</p>
                </div>
            `;
            return;
        }

        displayCharacter(character);
    } catch (error) {
        const detailContainer = document.getElementById('characterDetail');
        detailContainer.innerHTML = `
            <div class="error">
                <h2>Error loading character</h2>
                <p>Something went wrong. Please try again later.</p>
            </div>
        `;
    }
});

// Console message
console.log('%cGrok?! Character Detail', 'color: #60196d; font-size: 20px; font-weight: bold;');
