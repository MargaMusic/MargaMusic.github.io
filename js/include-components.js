const header = `
<header class="navbar">
    <div class="lang-switcher" role="radiogroup" aria-label="Language Selection">
        <img src="./images/fr.svg" title="Français" alt="Français" id="fr" onclick="setLanguage('fr')">
        <img src="./images/en.svg" title="Anglais" alt="English" id="en" onclick="setLanguage('en')">
    </div>
    <a href="index.html" class="logo"
        style="font-size: 2em; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Marga</a>
    <ul>
        <li><a href="index.html" data-translate="home"></a></li>
        <li><a href="about.html" data-translate="about"></a></li>
        <li><a href="projects.html" data-translate="projects"></a></li>
    </ul>
</header>
`

const footer = `
<footer>
    <p data-translate="copyright"></p>
    <p data-translate="copyright2" style="color: #666; font-size: 0.8em;"></p>
</footer>
`

async function includeComponent(component, targetId) {
    document.getElementById(targetId).innerHTML = component;
}

// // Run includes when the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//     includeComponent('navigation-bar', 'header-placeholder');
//     includeComponent('footer', 'footer-placeholder');
// });

async function loadComponents() {
    includeComponent(header, 'header-placeholder');
    includeComponent(footer, 'footer-placeholder');
}

// Expose the loading function globally or make it callable for the orchestrator
window.loadComponents = loadComponents;