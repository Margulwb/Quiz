window.onload = () => {
    clickAnswers();
}
function clickAnswers() {
    const question1 = document.querySelector('question-1');
    const question2 = document.querySelector('question-2');
    const question3 = document.querySelector('question-3');
    let score = 0;
    let numberQuestion = 1;
    const answers = [...document.querySelectorAll('.answers')];
    question1.forEach(answer => {
        answer.addEventListener('click', (event) => {
            question1.classList.add('is-close');
        });
    });

}

// 3 1 4