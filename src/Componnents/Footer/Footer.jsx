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
    <a className="link link-hover">Employees</a>
    <a className="link link-hover">Search</a>
    <a className="link link-hover">News</a>
    <a className="link link-hover">Career</a>
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
<div className='w-full bg-[#b8b8b8] h-[40px] text-center place-items-center flex justify-center'>
  <h4>Copyright © 2025, HouseHold Corp. All Rights Reserved.</h4>
</div>
        </div>
    );
};

export default Footer;