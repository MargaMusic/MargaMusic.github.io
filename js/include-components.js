// Function to fetch and insert HTML content into a target element ID
async function includeComponent(componentName, targetId) {
    const componentUrl = `./components/${componentName}.html`;
    try {
        const response = await fetch(componentUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();

        // Find the target element and insert the fetched HTML content
        document.getElementById(targetId).innerHTML = html;

    } catch (error) {
        console.error(`Failed to load component (${componentName}):`, error);
    }
}

// Run includes when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Load the Navigation Bar into the element with ID 'nav-placeholder'
    includeComponent('navigation-bar', 'nav-placeholder');

    // Load the Footer into the element with ID 'footer-placeholder'
    includeComponent('footer', 'footer-placeholder');
});