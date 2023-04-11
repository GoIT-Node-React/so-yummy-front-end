import * as React from 'react';

import {
  Main,
  FirstBlock,
  FooterMain,
  FooterMainBlock,
  FooterWrapper,
  FooterContainer,
} from './Footer.styled';

import { FooterTitle } from './FooterTitle';
import { FooterList } from './FooterList';
import { FooterNavigate } from './FooterNav';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { SocialLinks } from '../common/SocialLinks/SocialLinks';
import { FooterDown } from './FooterDown';

export const Footer = () => {
  return (
    <FooterContainer>
      <Main>
        <FooterWrapper>
          <FooterMain>
            <FooterMainBlock>
              <FirstBlock>
                <FooterTitle />
                <FooterList />
              </FirstBlock>
              <FooterNavigate />
            </FooterMainBlock>
            <SubscribeForm />
          </FooterMain>
          <SocialLinks />
        </FooterWrapper>
        <FooterDown />
      </Main>
    </FooterContainer>
  );
};
