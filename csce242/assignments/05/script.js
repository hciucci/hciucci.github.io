let count = 0;

function incrementCount() {
    count++;
    document.getElementById('count').innerText = count;
}

function refreshImage() {
    window.location.reload();
}

function moveSquare() {
    const sliderValue = document.getElementById('slider').value;
    const square = document.getElementById('square');
    square.style.left = sliderValue + 'px';
}
