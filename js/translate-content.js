const translations = {
    en: {
        home: "Home",
        about: "About",
        music: "Music",
        copyright: "© 2026 Marga. All rights reserved.",
        copyright2: "All wrongs freely available.",
        greeting: "Welcome to my website.",
        about_paragraph_start: "Born in Nancy, I started playing guitar in 2018. Over time, I discovered more and more instruments and began developing my own sounds, until I felt ready to write my music and share it with you.",
        about_paragraph_influence: "Although alternative rock is the musical genre that inspires me the most, I don't limit myself to it in order to experiment with other styles. My main influence is Muse, but depending on the song I draw inspiration from different artists and genres to keep things interesting.",
        about_paragraph_myself: "To keep the most creative freedom possible and achieve a truly personal sound, I keep control over every aspect of musical creation (with some exceptions): I compose, write the lyrics, play and record the instruments, mix, master, create the visual art, and even code the website you're currently visiting :)",
        contact: "Contact me",
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        music: "Musique",
        copyright: "© 2026 Marga. Tous droits réservés.",
        copyright2: "Tous gauches disponibles.",
        greeting: "Bienvenue sur mon site.",
        about_paragraph_start: "Né à Nancy, j'ai commencé à jouer de la guitare en 2018. Au fil du temps, j'ai découvert de plus en plus d'instruments et j'ai commencé à développer mes propres sonorités, jusqu'à ce que je me sente prêt à écrire ma musique et à la partager avec vous.",
        about_paragraph_influence: "Même si le genre musical qui m'inspire le plus est le rock alternatif, je ne m'y limite pas car j'aime expérimenter avec d'autres styles. Mon influence principale est Muse, mais en fonction de chaque musique je vais m'inspirer d'artistes et de genres différents, pour varier les plaisirs.",
        about_paragraph_myself: "Pour garder le plus de liberté créative et avoir le rendu le plus personnel possible, je garde la main sur tous les aspects de la création musicale (sauf exception) : je compose, écris les paroles, joue et enregistre les instruments, mixe, mastérise, fais l'art visuel, et code même le site que vous êtes en train de visiter :)",
        contact: "Me contacter",
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