import React, { useState, useRef, useEffect } from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle style={{ color: '#C6DC72' }}>Web Development <br />By Zac Hartman</LinkTitle><br />
          <LinkItem href="mailto:zbh206@gmail.com" style={{ color: '#C6DC72' }}>zbh206@gmail.com</LinkItem>
          <LinkItem href="tel:425-529-8009" style={{ color: '#C6DC72' }}>425-529-8009</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer></CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.facebook.com/profile.php?id=100090216425573">
            <AiFillFacebook size="3rem" color="#C6DC72" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/hootnhollerfestival/">
            <AiFillInstagram size="3rem" color="#C6DC72" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
