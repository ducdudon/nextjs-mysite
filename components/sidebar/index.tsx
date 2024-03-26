'use client';
import Image from 'next/image';
import {
  Btn,
  SidebarAddress,
  SidebarCopyright,
  SidebarDes,
  SidebarEmail,
  SidebarHeader,
  SidebarSocial,
  SidebarWrapper,
} from './styled';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <Image
          src='/logo.png'
          width={128}
          height={36}
          alt='Next.js Logo'
          priority
        />
        <SidebarDes>Framer Designer &amp; Developer</SidebarDes>
      </SidebarHeader>
      <Image src='/me.jpg' width={485} height={410} alt='ME' priority />
      <SidebarEmail>hello@drake.design</SidebarEmail>
      <SidebarAddress>Based in Los Angeles, CA</SidebarAddress>
      <SidebarCopyright>© 2022 Drake. All Rights Reserved</SidebarCopyright>
      <SidebarSocial>
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
      </SidebarSocial>
      <Btn href='#'>Hire Me!</Btn>
    </SidebarWrapper>
  );
}
