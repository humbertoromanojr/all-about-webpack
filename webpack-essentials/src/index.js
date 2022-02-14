import Heading from './components/heading.js'
import sum from './components/calculator.js';

console.log('Test working webpack, with webpack.config');

sum(2, 4);
sum(12, 9);

// loaders


const heading = new Heading();
heading.create('This title is dynamic');
heading.create('Hot reloading dynamic');