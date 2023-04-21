let b = document.getElementsByTagName('h1');
let a = document.getElementById('btn');
a.addEventListener('click', function() {
    console.log("hello");
    for (let i = 0; i < b.length; i++) {
        b[i].style.color = 'red';
    }
});