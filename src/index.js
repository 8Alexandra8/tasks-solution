import { task1, task2, task3, task4 } from "./resources/functions";

document.getElementById('button-task1').addEventListener('click', () => {
    const inputValue = document.getElementById('input-task1').value;
    if (inputValue) document.getElementById('answer-task1').innerText = task1(inputValue.split(' '));
})

document.getElementById('button-task2').addEventListener('click', () => {
    const inputValue = document.getElementById('input-task2').value;
    if (inputValue) document.getElementById('answer-task2').innerText = task2(inputValue);
})

document.getElementById('input-task2').addEventListener('input', e => {
    document.getElementById('cond-task3').innerText = e.target.value;
})

document.getElementById('button-task3').addEventListener('click', () => {
    const inputValue = document.getElementById('input-task3').value;
    if (inputValue) {
        document.getElementById('answer-task3').innerText = task3(
            document.getElementById('cond-task3').textContent,
            inputValue
        );
    }
})

document.getElementById('button-task4').addEventListener('click', () => {
    const str1 = document.getElementById('input-task4-1').value;
    const str2 = document.getElementById('input-task4-2').value;
    if (str1 && str2) document.getElementById('answer-task4').innerText = String(task4(str1, str2));
})
