class Heading {
  create(text) {
    const heading = document.createElement('he');
    heading.innerText = text;
    document.querySelector('body').appendChild(heading);
  }
}

export default Heading;