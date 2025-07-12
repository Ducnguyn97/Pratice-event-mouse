let imgObj = null;
function init(){
    imgObj = document.getElementById('myImg');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0';
}
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 +'px'
}
window.onload = init;
