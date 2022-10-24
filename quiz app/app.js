const quizData = [{
    question: "middest anime of the history",
    a: "jojo",
    b: "black clover ovb",
    c: "naruto",
    d: "hunterxhunter",
    correct: "b",
},
{
    question: " what defines insanity",
    a: "insane guy",
    b: "full grown man interested in girls",
    c: "anime enjoyer",
    d: "bros",
    correct: "c",
},
{
    question: "what an anime enjoyer should consider",
    a: "therapy",
    b: "touching some grass",
    c: "making real fans",
    d: "nothing , they are beyond repair",
    correct: "d",
},
{
    question: "when did indra gandhi called an air strike on her own country",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
}
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
            <ul>
            <li> b black clover </li>
            <li> c anime enjoyer</li>
            <li> d nothing , they are beyond repair</li>
            <li> d none of the above</li>
            </ul>
            </div>
            `
}
loadQuestion(index);
