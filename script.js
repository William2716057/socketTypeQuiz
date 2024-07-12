document.addEventListener('DOMContentLoaded', function () {
    const card = document.getElementById('card');
    const cardImage = document.getElementById('card-image');
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');

    const images = [
        'sample.jpg', // Replace with your image paths
        'sample2.jpg',
        'sample3.jpg',
        'sample4.jpg',
        'sample5.jpg',
        'sample6.jpg',
        'sample7.jpg',
        'sample8.jpg',
        'sample9.jpg',
        'sample10.jpg',
        'sample11.jpg',
        'sample12.jpg'
    ];

    const answers = [
        'A', // Replace with your correct answers
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N'
    ];

    let currentIndex = 0;

    // Shuffle the images and answers arrays together
    const shuffleArrays = (array1, array2) => {
        let arrayLength = array1.length;
        for (let i = arrayLength - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array1[i], array1[j]] = [array1[j], array1[i]];
            [array2[i], array2[j]] = [array2[j], array2[i]];
        }
    };
    shuffleArrays(images, answers);

    // Function to show the next card
    const showNextCard = () => {
        if (currentIndex < images.length) {
            cardImage.src = images[currentIndex];
            card.style.transform = 'translateX(100%)';
            setTimeout(() => {
                card.style.transform = 'translateX(0)';
                question.style.bottom = '50px';
                question.style.opacity = '1';
            }, 500);
        } else {
            // Quiz complete
            alert('Complete!');
        }
    };

    // Check answer
    answer.addEventListener('input', function () {
        if (answer.value.toLowerCase() === answers[currentIndex].toLowerCase()) {
            // Fade out the question
            question.style.opacity = '0';
            // Slide out the card to the left
            setTimeout(() => {
                card.style.transform = 'translateX(-100%)';
                setTimeout(() => {
                    currentIndex++;
                    answer.value = '';
                    showNextCard();
                }, 1000);
            }, 500);
        }
    });

    // Show the first card
    showNextCard();
});