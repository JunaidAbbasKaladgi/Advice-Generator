document.addEventListener('DOMContentLoaded', () => {
    const adviceText = document.getElementById('advice-text');
    const diceButton = document.getElementById('dice-button');

    async function fetchAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com');
            const data = await response.json();
            adviceText.textContent = `"${data.slip.advice}"`;
        } catch (error) {
            adviceText.textContent = 'Could not fetch advice. Please try again.';
        }
    }

    diceButton.addEventListener('click', fetchAdvice);
});
