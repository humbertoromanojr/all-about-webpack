import './heading.css';

class Heading {
  create(text) {
    const heading = document.createElement('he');
    heading.innerText = text;
    heading.classList.add('main-title');

    document.querySelector('body').appendChild(heading);
  }
}

export default Heading;