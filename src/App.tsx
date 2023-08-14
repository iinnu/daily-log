import image from '@/assets/logo-on-white-bg.png';
import './App.css';

export default function App() {
  return (
    <div>
      <img alt='webpack with logo' src={image} />
      <div className='header'>Hello, Webpack!</div>
    </div>
  );
}
