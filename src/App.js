import './App.css';
import imageQr from './components/assets/image-qr-code.png'

function App() {
  return (
    <>
      <section className="container">
        <div className='card'>
          <img className='card__image' src={imageQr} alt="" />
          <h1 className='card__title'>Improve your front-end skills bu building projects</h1>
          <p className='card__description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </section>
    </>
  );
}

export default App;
