import React from 'react';
import eleyjambaroImg from './images/eleyjambaro-img.jpg';
import './app.css';

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <img src={eleyjambaroImg} className="site-header__eleyjambaro-img" alt="eleyjambaro" />
        <div className="site-header__eleyjambaro-desc">
          <p>June L A Jambaro</p>
          <p className="site-header__eleyjambaro-bio">Developer and Creator of Daystamp Web Application</p>
        </div>
        <a
          className="site-header__link"
          href="http://daystamp.eleyjambaro.website"
        >
          Explore Daystamp App
        </a>
      </header>
    </div>
  );
}

export default App;