const form = document.querySelector('form')
const ul = document.querySelector('ul')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const li = document.createElement('li');
    const input = document.querySelector('input');
    li.innerText = input.value;
    console.log(input.value)
    ul.append(li);
})