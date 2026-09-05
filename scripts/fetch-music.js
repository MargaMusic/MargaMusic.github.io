function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const songId = getQueryParam('id');

    if (songId) {
        let title;
        let coverUrl;
        let description;
        let genre;
        let lyrics;
        let chords;
        let releaseDate;

        // Not the most scalable solution, put the date in a json file when I've finished too many songs :)
        switch (songId) {
            case 'soclosed':
                title = 'So Close(d)';
                coverUrl = './images/So Close(d).png';
                genre = 'Indie folk';
                break;

            default:
                break;
        }

        let titleElement = document.getElementById('music-title');
        let coverElement = document.getElementById('music-cover');

        titleElement.textContent = title;
        coverElement.src = coverUrl;
        coverElement.title = title;
        coverElement.alt = title;
    }
});
