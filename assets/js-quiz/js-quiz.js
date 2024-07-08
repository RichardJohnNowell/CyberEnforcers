// start of cyber quiz
// an array of questions and answers
const cyberQuizConst = [
    {
        answer: 'C',
        question:
            'Which of the following passwords is the strongest? \nA - 123123123\nB - Pa55word\nC - C^72j5pyR#%\nD - Ricky65'
    },
    {
        answer: 'A',
        question:
            'Which of the below is not used for MFA? \nA - Something you do\nB - Something you have\nC - Something you know\nD - Something you are'
    },
    {
        answer: 'B',
        question:
            'How can you protect yourself from cyberbullying? \nA - Post hurting statement\nB - Never share your username and password\nC - Never care about posting anything\nD - None of these'
    },
    {
        answer: 'B',
        question:
            'Each computer with internet access is assigned a ____? \nA - Machine address\nB - Internet Protocol (IP)\nC - Internet availability\nD - Network Interface card'
    },
    {
        answer: 'A',
        question:
            'A group of computers networked together and used by hackers to steal data is called a …? \nA - Botnet\nB - Rootkit\nC - DDoS\nD - Dark net'
    }
];
// end of array
// start of recursive function
function cyberQuiz() {
    let score = 0;
    // forEach array method
    cyberQuizConst.forEach((question) => {
        // window.prompt method
        let answer = prompt(question.question + '\nAnswer: ');
        // letter input lowercase to uppercase
        if (answer.toUpperCase() === question.answer) {
            score = score + 1;
            alert('Your answer is correct. Your score is currently ' + score);
        } else {
            alert('Your answer is not correct or has invalid input.');
        }
    });
    // score accumulator
    if (score >= 4) {
        alert('Congratulations! You have passed ' + score);
    } else {
        alert('Sorry, you did not pass ' + score);
    }
}
// end
