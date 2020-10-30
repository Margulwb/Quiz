window.onload = start();
function start() {
    const question1 = document.querySelector('.question-1');
    const question2 = document.querySelector('.question-2');
    const question3 = document.querySelector('.question-3');
    let answer = document.querySelectorAll(".btn");
    let answer2 = document.querySelectorAll(".btn2");
    let answer3 = document.querySelectorAll('.btn3');
    let goodAnswer1 = document.querySelector('#ask1');
    let goodAnswer2 = document.querySelector('#ask2');
    let goodAnswer3 = document.querySelector('#ask3');
    let result = document.querySelector('.result');
    answer.forEach(answer => {
        answer.addEventListener('click', () => {
            setInterval(() => {
                question1.remove('is-open');
                question1.setAttribute('class', 'is-close');
                question2.setAttribute('class', 'is-open');
            }, 550);
            answer2.forEach(answer2 => {
                answer2.addEventListener('click', () => {
                    setInterval(() => {
                        question2.remove('is-open');
                        question2.setAttribute('class', 'is-close');
                        question3.setAttribute('class', 'is-open');
                    }, 550);
                    answer3.forEach(answer3 => {
                        answer3.addEventListener('click', () => {
                            setInterval(() => {
                                question3.remove('is-open');
                                question3.setAttribute('class', 'is-close');
                                result.setAttribute('class', 'is-open');
                                result.innerHTML = "Your score is " + score +
                                    "<br><button class='btn'><a href='index.html'>Back</a></button>";
                            }, 550);
                        });
                    });
                });
            });
        });
    }
    );
    var score = 0;
    goodAnswer1.addEventListener('click', () => { score++; });
    goodAnswer2.addEventListener('click', () => { score++; });
    goodAnswer3.addEventListener('click', () => { score++; });
}
// 3 1 4