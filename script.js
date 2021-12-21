console.log('hello!');

let testElem = document.querySelector('#testElem');

let isPointerDown = false;
let offset = { x: 0, y: 0 };
testElem.addEventListener('pointerdown', (e) => {
    console.log(e.clientX + ' ' + e.clientY, e.offsetX, e.offsetY);
    isPointerDown = true;

    offset.x = e.offsetX;
    offset.y = e.offsetY;
    return false;
});

document.addEventListener('pointerup', (e) => {
    console.log(e.clientX + ' ' + e.clientY);
    if (isPointerDown) {
        testElem.style.left = e.clientX - offset.x + 'px';
        testElem.style.top = e.clientY - offset.y + 'px';
    }
    isPointerDown = false;
});
