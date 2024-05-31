document.addEventListener('DOMContentLoaded', () => {
    // JavaScript functionality can be added here
    // Example: Search bar functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            alert(`Searching for: ${query}`);
            // Implement search functionality here
        } else {
            alert('Please enter a search term.');
        }
    });
});
