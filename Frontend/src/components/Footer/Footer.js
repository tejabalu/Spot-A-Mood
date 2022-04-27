import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Made by Chuan-Li Chang and Teja Balu</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/tejabalu/Spot-A-Mood">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
