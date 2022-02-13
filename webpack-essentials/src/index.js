import Heading from './heading.js'
import sum from './calculator';

console.log('Test working webpack, with webpack.config');

sum(2, 4);
sum(12, 9);

// loaders


const heading = new Heading();
heading.create('This title is dynamic');