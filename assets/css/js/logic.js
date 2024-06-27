const toggleButton = document.getElementById('mode-toggle');
const header = documnet.header;

toggleButton.addEventListener('click', () => {
    header.classList.toggle('dark-mode');
});