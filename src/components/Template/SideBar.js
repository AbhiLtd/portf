import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/abhi.jpg" alt="" />
      </Link>
      <header>
        <h2>Abhishek&apos;Pandey</h2>
        <p>
          <a href="mailto:abhishek89p@gmail.com">abhishek89p@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Abhishek. I am a{' '}
        <a href="https://nagpuruniversity.ac.in/">Nagpur RTMNU</a> graduate, RCERT
        alumnus, and Enginnering Lead of Persistent Systems Consultant{' '}
        <a href="https://www.persistent.com/">Persistent</a>. Previously, I
        was senior software engineer at Techneplus software India Ltd <a href="https://www.techneplus.com/">TechnePlus</a>,
        senior web developer at <a href="https://www.kooud.com/">Kooud</a>, and
        software engineer at Creed Technologies <a href="hhttps://www.creedglobal.in/">CreedGlobal</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Abhishek&apos;Pandey <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
