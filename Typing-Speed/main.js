const setOfWords = ["My mother always used to say that The older you get, the better you get, unless you are a banana.", "Clothes make the man. Naked people have little or no influence in society.", "I walk around like everything is fine, but deep down, inside my shoe, my sock is sliding off.", "There is nothing wrong with you that an expensive operation cannot prolong."];

const message = document.getElementById('message');
const typedWords = document.getElementById('typed');
const btn = document.getElementById('btn');
let startTime, endTime;

const beginTest = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    message.innerText = setOfWords[randomNumber]
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";

}

const endTest = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount / totalTime) * 60);
    let displaymsg = "Your typing speed is " + speed + "words per minute.";
    displaymsg += compare(message.innerText, totalStr);
    message.innerText = displaymsg;
    typedWords.value = '';
}

const compare = (text1, text2) => {
    let words1 = text1.split(" ");
    let words2 = text2.split(" ");
    let count = 0;
    let nullCount = 0;
    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            count++;
        }
        if (words2[index] == null) {
            nullCount++;
        }
    })
    let errors = (words1.length - (nullCount + count));
    return (" " + count + " words were correctly typed out of " + words1.length + " words and the total number of errors made are " + errors + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typedWords.disabled = false;
        beginTest();
    } else if (this.innerText == "Done") {
        typedWords.disabled = true;
        btn.innerText = "Start";
        endTest();
    }
});
