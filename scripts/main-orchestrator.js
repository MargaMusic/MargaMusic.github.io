/**
 * Main Orchestration Script: Runs component loading and then applies localization.
 * This script must be placed at the end of the body tag in your main index.html 
 * to ensure all other scripts have loaded first.
 */
async function runAppOrchestrator() {
    console.log("Starting Orchestrator...");

    // STEP 1: Load Structural Components (Async)
    if (window.loadComponents && typeof window.loadComponents === 'function') {
        try {
            await window.loadComponents();
            console.log("Component loading complete.");
        } catch (e) {
            console.error("Error during component loading:", e);
        }
    } else {
        console.warn("loadComponents() function not found. Skipping structural component load.");
    }


    // STEP 2: Initialize Translations (Sync)
    if (typeof window.initializeLanguage === 'function') {
        let detectedLang = window.initializeLanguage();
        console.log("Translation initialized successfully.");
    } else {
        console.warn("initializeLanguage() function not found. Localization will be skipped.");
    }

    console.log("Orchestrator finished running sequence.");
}

// Wait for the entire DOM content to load before starting the process
document.addEventListener("DOMContentLoaded", runAppOrchestrator);
