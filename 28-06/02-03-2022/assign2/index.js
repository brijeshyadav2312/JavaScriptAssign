var counter=0;

function like() {
    counter += 1;
    invoke();
}
function dislike() {
    counter -= 1;
    invoke();
}
function invoke() {
    var result = document.getElementById('like_count');
    result.innerText = counter;
}

function invoke2() {
    var result = document.getElementById('like_count2');
    result.innerText = counter;
}
