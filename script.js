const upButton = document.getElementById('scroll-up-link');
console.log(upButton);

upButton.addEventListener('mouseover', () => {
    upButton.firstElementChild.firstElementChild.src = 'react-logo-no-bg-dark.png'
})

upButton.addEventListener('mouseout', () => {
    upButton.firstElementChild.firstElementChild.src = 'react-logo-no-bg.png'
})

const links = document.querySelectorAll('.nav-link');
const container = document.getElementsByTagName('main')[0];
const anchors = document.getElementsByTagName('h2');

function navigate() {
    let e = document.querySelector('nav .active');
    if (e)
        e.classList.remove('active');
    this.classList.add('active');
    console.log('click');
}

links.forEach(
    (el) =>  {el.addEventListener('click', navigate)}
);

document.addEventListener('scroll', (evt) => {
    console.log('scroll');
    let i, anchor, y, a;
    for(i=0; i< anchors.length; i++) {
        anchor = anchors[i];
        y = anchor.getBoundingClientRect().top;
        if (y > 0 && y < document.clientHeight) {
            links.forEach((l) => {
                if(l.firstElementChild.href.endsWith(anchor.id)) {
                    console.log('now active');
                    l.classList.add('active');
                }
                else {
                    l.classList.remove('active');
                    console.log('now unactive');
                }

            });
            break;
        }
    }
    });
