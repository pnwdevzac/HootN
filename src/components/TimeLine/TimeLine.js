import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import Map from '../Map';

const Timeline = () => {
  return (
    <Section id="timeline">
      <SectionTitle></SectionTitle>
      <SectionText>
      <div style={{ color: '#C6DC72', fontWeight: 'bold', fontSize: '2.6rem' }}>For ticket sales, contact our vendors below:</div>
        <div>
        <div>
          <Map locations={['Snohomish', 'Shoreline', 'Tulalip', 'Everett', 'LakeStevens', 'Tulalip', 'Stanwood']} />
        </div>
  
          Seattle & Shoreline: <a href="tel:4252732459" style={{ color: '#C6DC72', textDecoration: 'none' }}>Davin: 425-273-2459</a>
        </div>
        <div>
          Lake Stevens: <a href="tel:4256520156" style={{ color: '#C6DC72', textDecoration: 'none' }}>Donovan: 425-652-0156</a>
        </div>
        <div>
          Snohomish: <a href="tel:4255039466" style={{ color: '#C6DC72', textDecoration: 'none' }}>Rickster: 425-503-9466</a>
        </div>
        <div>
          Tulalip: <a href="tel:2062804815" style={{ color: '#C6DC72', textDecoration: 'none' }}>Emily: 206-280-4815</a>
        </div>
        <div>
          Everett: <a href="tel:7209883329" style={{ color: '#C6DC72', textDecoration: 'none' }}>Seth: 720-988-3329</a>
        </div>
        <div>
          Stanwood: <a href="tel:4258707692" style={{ color: '#C6DC72', textDecoration: 'none' }}>Pat: 425-870-7692</a>
        </div>
        <div>
          Lynwood: <a href="tel:2068504584" style={{ color: '#C6DC72', textDecoration: 'none' }}>Jason: 206-850-4584</a>
        </div>
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
