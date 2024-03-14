import Image from 'next/image';
import styles from './sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className='sidebar-header'>
        <Image
          className={styles.logo}
          src='/logo.png'
          width={128}
          height={36}
          alt='Next.js Logo'
          priority
        />
        <span className='sidebar-des'>Framer Designer &amp; Developer</span>
      </div>
      <Image
        className={styles.logo}
        src='/me.jpg'
        width={485}
        height={410}
        alt='ME'
        priority
      />
      <h3 className='email'>hello@drake.design</h3>
      <h3 className='address'>Based in Los Angeles, CA</h3>
      <p className='copyright'>© 2022 Drake. All Rights Reserved</p>
      <ul className='social-profile d-flex align-items-center flex-wrap justify-content-center'>
        <li>
          <a href='#'>
            <i className='lab la-instagram'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='lab la-twitter'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='lab la-dribbble'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='lab la-github'></i>
          </a>
        </li>
      </ul>
      <a href='#contact' className='theme-btn'>
        <i className='las la-envelope'></i> Hire Me!{' '}
      </a>
    </div>
  );
}
