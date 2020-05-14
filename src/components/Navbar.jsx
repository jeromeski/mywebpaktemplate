/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import $ from 'jquery';


const app = {};

function Navbar() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
      app.mobileMenu();
  }, []);

  app.mobileMenu = function() {
    $(document).click(function(e) {
      const target = $(e.target);
      const iconNav = $('#nav_bar nav');
      if (target.is('span') && !toggle) {
        setToggle(true);
        iconNav.toggleClass('show');
        $('#mobile-link span').addClass('icon-x');
        $('#mobile-link span').removeClass('icon-menu');
      } else {
        iconNav.removeClass('show');
        $('#mobile-link span').addClass('icon-menu');
        $('#mobile-link span').removeClass('icon-x');
        setToggle(false);
      }
    });
  };

  return (
    <div id='nav_bar'>
      <a className='logo' rel='index' href='/'>
        <img
          src={Logo}
          alt='Front End Developer Logo, MERN Developer Logo, React Developer Logo'
        />
      </a>
      <nav>
        <a  href='/' rel='index' className='nav-link'>
          <span className='icon-home1'></span>
        </a>
        <a href='/about' rel='about' className='nav-link'>
          <span className='icon-user'></span>
        </a>
        <a href='/skills' rel='skills' className='nav-link'>
          <span className='icon-tool'></span>
        </a>
        <a rel='works' href='/works' className='nav-link'>
          <span className='icon-eye'></span>
        </a>
        <a rel='contact' href='/contact' className='nav-link'>
          <span className='icon-mail'></span>
        </a>
      </nav>
      <ul className='social-media'>
        <li>
          <a href='https://twitter.com/d_JeromeG_b'>
            <span className='icon-twitter'></span>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/jerome-gacoscosim-5b3972166/'>
            <span className='icon-linkedin'></span>
          </a>
        </li>
        <li>
          <a href='fb.me/jerome.webdeveloper'>
            <span className='icon-facebook'></span>
          </a>
        </li>
        <li>
          <a
            href='#'
            // target='_blank'
          >
            <span className='icon-rss'></span>
          </a>
        </li>
      </ul>
      <a id='mobile-link' href='#'>
        <span className='icon-menu'></span>
        <span className='icon-x hidden'></span>
      </a>
    </div>
  );
};

export default Navbar;
