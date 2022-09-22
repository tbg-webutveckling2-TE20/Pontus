function loadBigFoot() {
    document.getElementById('bigFoot').src = 'assets/images/bigfoot.png'
}

function moveBigFoot() {

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    alert('Du hittade Bigfoot!')
    var picture = document.getElementById('bigFoot')
    var x = Math.random() * height
    var y = Math.random() * width

    picture.style.top = x + 'px'
    picture.style.left = y + 'px'


    console.log(width, height);

}