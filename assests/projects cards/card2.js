
function toggleReadMore(cardId, contentId, buttonId) {
    const card = document.getElementById(cardId);
    const readMoreContent = document.getElementById(contentId);
    const readMoreButton = document.getElementById(buttonId);

    if (card.classList.contains('expanded')) {
        readMoreContent.style.maxHeight = null;
        readMoreButton.textContent = 'Read More';
    } else {
        readMoreContent.style.maxHeight = readMoreContent.scrollHeight + 'px';
        readMoreButton.textContent = 'Read Less';
    }

    card.classList.toggle('expanded');
}
AOS.init({
    duration: 1000, // animation duration in milliseconds
    easing: 'ease-in-out', // easing function
    // once: true // whether animation should happen only once
});