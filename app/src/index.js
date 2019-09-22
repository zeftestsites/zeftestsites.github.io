// This is the main js file that will import everything to be bundled.
import './js/index.js';
import './less/styles.less';
import 'intersection-observer';
import scrollama from 'scrollama';

const scroller = scrollama();

console.log(scroller);
const container = document.getElementById('description-container');

// scroller
//     .setup({
//         step: '.main-content'
//     })
//     .onStepEnter(({element, index, direction}) => {
//         console.log(element)
//     })
//     .onStepExit(({element, index, direction}) => {
//         console.log(index)
//     });

scroller
    .setup({
        step: '.step',
    })
    .onStepEnter(({element, index, direction}) => {
        container.classList.remove('unfade');
        container.classList.add('fade');
        element.classList.add('focus');
        element.classList.remove('unfocus');
        // console.log(container.querySelectorAll('.description-image').forEach(image => console.log(image.classList)));

        container.querySelectorAll('.description-image').forEach(image => {
            image.classList.remove('shown');
            image.classList.add('hidden');
        });

        console.log(element);

        container.querySelector(`#${element.id}-image`).classList.add('shown');
    })
    .onStepExit(({element, index, direction}) => {
        container.classList.remove('fade');
        container.classList.add('unfade');
        element.classList.remove('focus');
        element.classList.add('unfocus');
        // container.querySelector('.description-image').classList.remove('shown');
        // container.querySelector('.description-image').classList.add('hidden');

        container.querySelectorAll('.description-image').forEach(image => {
            image.classList.remove('shown');
        });

        container.querySelector(`#${element.id}-image`).classList.remove('shown');

        if (element.id === 'ict' && direction === 'up') {
            container.querySelector('#main-image').classList.add('shown');
        }
    })
