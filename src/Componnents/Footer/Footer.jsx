import React from 'react';
import Container from '../Container/Container';
import logo from '../../assets/logo-cl.svg'

const Footer = () => {
    return (
        <div className='bg-base-200'>
          <Container>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-4 md:py-20">
  <aside>
<img src={logo} alt="" />
    <p className='md:w-100'>
Your one-stop platform for all household services. Find trusted professionals for cleaning, repairs, and more, all in one place.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
</Container>
        </div>
    );
};

export default Footer;