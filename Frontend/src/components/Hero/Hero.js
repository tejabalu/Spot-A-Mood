import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Spot A Mood
        </SectionTitle>
        <SectionText>
        mood tracker based on time: capture your weekly mood based on your listening history
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;