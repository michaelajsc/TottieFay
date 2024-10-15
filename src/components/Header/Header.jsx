import reactImg from '../../assets/tottiebubble.png';
import '../../index.css'
import './Header.css';

const itemDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    const description =itemDescriptions [genRandomInt(2)];
    
      return (
        <header>
          <img src={reactImg} alt="Bubble Feather Logo" />
          <main>
            <h2>Textile gifts and accessories made with love</h2>
         </main>
          <p>
            {description} Placeholder.
          </p>
        </header>
      );
    }