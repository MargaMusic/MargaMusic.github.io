const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        copyright: "© 2026 Marga. All Rights Reserved.",
        copyright2: "All Wrongs Freely Available.",
        greeting: "Welcome to my website, make yourself comfortable.",
    },
    fr: {
        home: "Accueil",
        about: "A propos",
        projects: "Projets",
        copyright: "© 2026 Marga. Tous Droits Réservés.",
        copyright2: "Tous Gauches Disponibles.",
        greeting: "Bienvenue sur mon site, vous allez grave kiffer.",
    }
};

// DOM elements needed for the logic
let currentLang = 'en'; // Default fallback language

/**
 * Updates all translatable elements based on the provided language code.
 * @param {string} lang - The language code ('en' or 'fr').
 */
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error("Translation data not found for language:", lang);
        return;
    }

    // Update the global state and local storage
    currentLang = lang;
    localStorage.setItem('user_preferred_language', lang);

    // Loop through all elements marked with a translation key (data-translate)
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        let newText;

        // Handle dynamic keys vs static ones
        if (key === 'language') {
            // Special case for the button text which might not exist in data-translate
            newText = translations[lang][key];
        } else if (translations[lang] && translations[lang][key]) {
            newText = translations[lang][key];
        }

        if (newText) {
            el.textContent = newText;
        }
    });
}

/**
 * Determines the initial language (Auto-detection)
 */
function initializeLanguage() {
    let detectedLang = null;

    // Check Local Storage
    detectedLang = localStorage.getItem('user_preferred_language');
    if (detectedLang && (detectedLang === 'en' || detectedLang === 'fr')) {
        console.log(`Language loaded from storage: ${detectedLang}`);
        setLanguage(detectedLang);
        return;
    }

    // Check Browser Accept-Language Header
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
        const primaryCode = browserLang.split('-')[0];
        console.log(`Browser language: ${primaryCode}`)
        if (primaryCode === 'fr') {
            detectedLang = 'fr';
        } else {
            detectedLang = 'en';
        }
    }

    // Fallback Default
    if (!detectedLang) {
        console.warn("No language preference found. Defaulting to English.");
        detectedLang = 'en';
    }

    setLanguage(detectedLang);

    return detectedLang;
}

// // Run includes when the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//     initializeLanguage();
// });

// Expose the loading function globally or make it callable for the orchestrator
window.initializeLanguage = initializeLanguage;