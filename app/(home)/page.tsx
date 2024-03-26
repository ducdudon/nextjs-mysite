'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import { AboutWrapper, HeroWrapper, MainWrapper } from './styled';

export default function Home() {
  return (
    <MainWrapper>
      <HeroWrapper>
        <div className='custom-container'>
          <div className='hero-content content-width'>
            <div className='section-header'>
              <h4
                className='subtitle scroll-animation'
                data-animation='fade_from_bottom'
              >
                <i className='las la-home'></i> Introduce{' '}
              </h4>{' '}
              <h1
                className='scroll-animation'
                data-animation='fade_from_bottom'
              >
                Say Hi from <span>Drake</span>, Webflow Designer and Developer
              </h1>
            </div>
            <p className='scroll-animation' data-animation='fade_from_bottom'>
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </p>
            <a
              href='#portfolio'
              className='go-to-project-btn scroll-to scroll-animation'
              data-animation='rotate_up'
            >
              <Image
                className={styles.logo}
                src='/round-text.png'
                width={141}
                height={148}
                alt='Round Text'
                priority
              />
              <i className='las la-arrow-down'></i>
            </a>

            <div className='facts d-flex'>
              <div
                className='left scroll-animation'
                data-animation='fade_from_left'
              >
                <h2>10+</h2>
                <p>
                  Years of <br />
                  Experience
                </p>
              </div>

              <div
                className='right scroll-animation'
                data-animation='fade_from_right'
              >
                <h2>182+</h2>
                <p>
                  projects completed on <br />
                  15 countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroWrapper>
      <AboutWrapper>
        <div className='custom-container'>
          <div className='about-content content-width'>
            <div className='section-header'>
              <h4
                className='subtitle scroll-animation'
                data-animation='fade_from_bottom'
              >
                <i className='lar la-user'></i> About{' '}
              </h4>
              <h2
                className='scroll-animation'
                data-animation='fade_from_bottom'
              >
                Every great design begin with
                <br /> an even <span>better story</span>
              </h2>
            </div>
            <p className='scroll-animation' data-animation='fade_from_bottom'>
              Since beginning my journey as a freelance designer nearly 8
              yearsago, I&apos;ve done remote work for agencies, consulted for
              startups,and collaborated with talented people to create digital
              productsfor both business and consumer use. I&apos;m quietly
              confident,naturally curious, and perpetually working on improving
              mychopsone design problem at a time.
            </p>
            <p>
              Since beginning my journey as a freelance designer nearly 8
              yearsago, I&apos;ve done remote work for agencies, consulted for
              startups,and collaborated with talented people to create digital
              productsfor both business and consumer use. I&apos;m quietly
              confident,naturally curious, and perpetually working on improving
              mychopsone design problem at a time.Since beginning my journey as
              a freelance designer nearly 8 yearsago, I&apos;ve done remote work
              for agencies, consulted for startups,and collaborated with
              talented people to create digital productsfor both business and
              consumer use. I&apos;m quietly confident,naturally curious, and
              perpetually working on improving mychopsone design problem at a
              time.Since beginning my journey as a freelance designer nearly 8
              yearsago, I&apos;ve done remote work for agencies, consulted for
              startups,and collaborated with talented people to create digital
              productsfor both business and consumer use. I&apos;m quietly
              confident,naturally curious, and perpetually working on improving
              mychopsone design problem at a time.Since beginning my journey as
              a freelance designer nearly 8 yearsago, I&apos;ve done remote work
              for agencies, consulted for startups,and collaborated with
              talented people to create digital productsfor both business and
              consumer use. I&apos;m quietly confident,naturally curious, and
              perpetually working on improving mychopsone design problem at a
              time.Since beginning my journey as a freelance designer nearly 8
              yearsago, I&apos;ve done remote work for agencies, consulted for
              startups,and collaborated with talented people to create digital
              productsfor both business and consumer use. I&apos;m quietly
              confident,naturally curious, and perpetually working on improving
              mychopsone design problem at a time.Since beginning my journey as
              a freelance designer nearly 8 yearsago, I&apos;ve done remote work
              for agencies, consulted for startups,and collaborated with
              talented people to create digital productsfor both business and
              consumer use. I&apos;m quietly confident,naturally curious, and
              perpetually working on improving mychopsone design problem at a
              time.Since beginning my journey as a freelance designer nearly 8
              yearsago, I&apos;ve done remote work for agencies, consulted for
              startups,and collaborated with talented people to create digital
              productsfor both business and consumer use. I&apos;m quietly
              confident,naturally curious, and perpetually working on improving
              mychopsone design problem at a time.Since beginning my journey as
              a freelance designer nearly 8 yearsago, I&apos;ve done remote work
              for agencies, consulted for startups,and collaborated with
              talented people to create digital productsfor both business and
              consumer use. I&apos;m quietly confident,naturally curious, and
              perpetually working on improving mychopsone design problem at a
              time.
            </p>
          </div>
        </div>
      </AboutWrapper>
    </MainWrapper>
  );
}
