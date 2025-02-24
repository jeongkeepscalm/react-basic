
import reactImage from '../assets/react-core-concepts.png';

const reactDescriptions = ['aaa', 'bbb', 'ccc'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
