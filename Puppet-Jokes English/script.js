
async function fetchAndDisplayEnglishJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/slack');
        if (!response.ok) { throw new Error('Failed to fetch joke'); }
        const jokeData = await response.json();
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    } catch (error) {
        console.error(error);
    }
}
fetchAndDisplayEnglishJoke();

const languageEnglishButton = document.getElementById('RightLanguageButton');
languageEnglishButton.onclick = () => {
    fetchAndDisplayEnglishJoke();
};