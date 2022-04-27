import React, { Component } from 'react';

import Pusher from 'pusher-js';
import format from 'date-fns/format';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './HistoryStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { history } from '../../constants/constants';

const History = () => (
  <Section id="history">
    <SectionDivider divider/>
    <SectionTitle>Spotify Mood History</SectionTitle>
    <SectionText>
      View your music history in realtime with Spotify<br />
      Recent Tracks
      {/* <tbody>{musicHistory.map((e, index) => TableItem(e, index))}</tbody> */}
    </SectionText>
  </Section>
);


export default History;