let closeface = document.getElementById('closed');
let openface = document.getElementById('open');

closeface.addEventListener('click', () => {
    if(openface.classList.contains('open')){
        openface.classList.add('active');
        closeface.classList.remove('active');
    }
})

openface.addEventListener('click', () => {
    if(closeface.classList.contains('closed')){
        closeface.classList.add('active');
        openface.classList.remove('active');
    }
})