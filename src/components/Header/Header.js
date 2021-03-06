import React from 'react';
import Navigation from '../Nav/Nav';

function Header() {
  return (
    <header className="d-flex flex-column align-items-end">
      <div className="bg-theme-2 title-bar skew my-4 py-2">
        <a href='/'><h1 className="text-theme-1 anti-skew pl-4">Craig Bennett</h1></a>
      </div>
      <div className="bg-theme-2 skew subtitle-bar py-2 pl-4">
        <h2 className="text-theme-1 anti-skew pl-4">Full Stack Developer</h2>
      </div>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
