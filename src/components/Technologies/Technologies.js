import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => {
  return (
    <div>
      <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Special thanks to  <a href="https://www.donovanlasers.com/">Donovan Lighting</a>, <a href="https://threebullbrewing.com/">Three Bull Brewing and </a>
        <a href="https://savagethc.com//">Savage THC </a>
        </SectionTitle>
        <SectionText>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexDirection: 'column', alignItems: 'center' }}>
            <a href="https://threebullbrewing.com/">
              <img src="/images/2.png" alt="Special Thanks" style={{ maxWidth: '100%', marginBottom: '20px' }} />
            </a>
            <a href="https://www.donovanlasers.com/"> 
              <img src="/images/3.png" alt="Special Thanks" style={{  marginBottom: '20px' }} />
            </a>
            <a href="https://www.donovanlighting.com/">
              <img src="/images/4.png" alt="Special Thanks" style={{  marginBottom: '20px' }} />
            </a>
          </div>
          <div>
          <a href="https://savagethc.com//">
              <img src="/images/6.png" alt="Special Thanks" style={{ maxWidth: '100%', marginBottom: '20px' }} />
            </a>
          </div>
        </SectionText>
        <SectionDivider colorAlt />
      </Section>
    </div>
  );
};

export default Technologies;
