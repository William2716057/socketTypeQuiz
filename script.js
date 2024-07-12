document.addEventListener('DOMContentLoaded', function () {
    const card = document.getElementById('card');
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');

    // Slide in the card from the right
    setTimeout(() => {
        card.style.transform = 'translateX(0)';
        question.style.bottom = '50px';
        question.style.opacity = '1';
    }, 500);

    // Check the answer
    answer.addEventListener('input', function () {
        if (answer.value.toLowerCase() === 'test') { // Replace 'correct answer' with the actual answer
            // Fade out the question
            question.style.opacity = '0';

            // Slide out the card to the left
            setTimeout(() => {
                card.style.transform = 'translateX(-100%)';
            }, 500);
        }
    });
});