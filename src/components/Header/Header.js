import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '0', textAlign: 'center' }}>
        <Span style={{ fontWeight: 'bold', fontSize: '32px', color: '#C6DC72' }}>Hoot n' Holler</Span>
      </div>
    </Div1>
    <Div2>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ marginRight: '20px' }}>
          <Link href="#projects">
            <NavLink style={{ fontWeight: 'bold', fontSize: '32px', color: '#C6DC72' }}>
              Lineup
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#map">
            <NavLink style={{ fontWeight: 'bold', fontSize: '32px', color: '#C6DC72' }}>
              Get Tickets
            </NavLink>
          </Link>
        </li>
      </ul>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.facebook.com/profile.php?id=100090216425573">
        <AiFillFacebook size="40px" color="#C6DC72" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/hootnhollerfestival/">
        <AiFillInstagram size="40px" color="#C6DC72" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
