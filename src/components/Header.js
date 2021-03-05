import React from 'react';
import Navigation from './Nav'

function Header() {
    return (
        <header >
          <div className="bg-theme-2 title-bar skew my-4 ml-5 py-2">
            <h1 className="text-theme-1 anti-skew pl-4">Craig Bennett</h1>
          </div>
          <div className="bg-theme-2 skew subtitle-bar py-2 pl-4">
            <h2 className="text-theme-1 anti-skew pl-4">Full Stack Developer</h2>
          </div>
          <Navigation />
        </header>
      );
}

export default Header