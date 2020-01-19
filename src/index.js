import _ from 'lodash';
import { cube } from './math';
import './style.css';


function component() {
    const element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        `5 cubed is equal to ${cube(5)}`
    ].join('\n\n');

    return element;
}

document.body.appendChild( component() );

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}