let userText, arr, arrText;

function show_prompt() {
    userText = prompt('Введите текст');
    arr = userText.split(' ');
    arrText = arr.sort(compareText);

    alert('Три самых длинных слова: ' + arrText[0] + ' ' + arrText[1] + ' ' + arrText[2]);

    function compareText(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    }
}