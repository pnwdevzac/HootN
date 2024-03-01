import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center style={{ fontSize: 'calc(2rem + 1vw)', lineHeight: '1.5' }}>
  Welcome To <br />
  The Hoot N Holler Music Festival! <br />
</SectionTitle>
      <SectionText style={{ fontSize: '2.5rem' }}>
      <img src='/images/7.png' alt="Description of the image" style={{ maxWidth: '100%', height: 'auto' }} /> 
        {/* <img src='/images/5.png' alt="Description of the image" style={{ maxWidth: '100%', height: 'auto' }} />  */}
        
        
        
        <br/> We are in the process of finalizing our lineup for 2024<br/><br></br>
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Time to get stoked!</span>
        <br /> A weekend of live music, lasers, art, food, and good vibes on 2.5 park-like acres in Tulalip, Washington! Donovan Lighting will be here creating a visual feast for your eyes! Donovan always brings an amazing show!! 
        <br /><br />  
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>2023 Lineup:</span>
        <br /><br />
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Friday July 28th:</span>
        <br />
        - <a href="https://www.perfectbytomorrow.com/" style={{ textDecoration: 'none', color: 'inherit' }}>Perfect By Tomorrow</a>
        <br />
        - <a href="https://chrispoage.bandcamp.com/album/road-soda" style={{ textDecoration: 'none', color: 'inherit' }}>The Panda Conspiracy</a>
        <br /><br />
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Saturday July 29th:</span>
        <br />
        - <a href="https://www.facebook.com/webacedesign/" style={{ textDecoration: 'none', color: 'inherit' }}>Duffy Owens</a>, George Montero, Joel Gamble, and Pamela
        <br />
        - Things with Strings
        <br />
        - <a href="https://www.facebook.com/mamamagsband/" style={{ textDecoration: 'none', color: 'inherit' }}>The Mamma Mags Band</a>
        <br />
        - <a href="https://www.facebook.com/narrowtarot/" style={{ textDecoration: 'none', color: 'inherit' }}>Narrow Tarot</a>
        <br />
        - <a href="https://clothingoptional.bandcamp.com/" style={{ textDecoration: 'none', color: 'inherit' }}>Clothing Optional</a>
        <br />
        - Davin & The Big Smooth
        <br />
        - <a href="https://www.facebook.com/thestaxxbrothers" style={{ textDecoration: 'none', color: 'inherit' }}>Staxx Brothers</a> sing along with The Bad Apples
        <br />
        - Blue Jay and surprise guests
        <br /><br />
        We will also have live art performances by Grizzly Porter, Chima Linga Studios, and live glass blowing. Yoga by the pond with Kerri on Saturday morning.
        <br /><br />
        Don't forget your fancy pajamas for Fancy Pajama Sunday! Break out the silk and satin and put your pinky out.
        <br /><br />
        Tickets are $120 for the weekend. Tent camping is included with the ticket.

        <br /><br />
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>*More details to be added</span>
        <br /><br />
        Contact us for tickets. We want these awesome old school paper tickets in your hands. Limited availability, get them while you can. We have several people in different locations that can help you out. Or you can pay, and we will hold your tickets at the gate.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;