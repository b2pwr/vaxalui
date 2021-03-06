import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import Features from 'library/saya/Kenny/Features';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';
import Table from 'library/saya/Rick/Table';

import TitleLineBox from 'library/saya/Kenny/TitleLineBox';

import Layout from '../../shared/Layout';

import SayaStretch from '../shared/SmallImageBoxs/SayaStretch';
import Chromuch from '../shared/SmallImageBoxs/Chromuch';
import SayaFresh from '../shared/SmallImageBoxs/SayaFresh';
import SayaMicrofiber from '../shared/SmallImageBoxs/SayaMicrofiber';

import background_TopSection from '../../img/bg80.jpg';
import introduction1 from '../../img/bg78.jpg';
import material from '../../img/bg81.jpg';

storiesOf('saya|Pages/Desktop/Products', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('SayaFresh',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="SAYA Performance Fiber"
            secondTitle="SAYA"
            secondTitleBack="FRESH"
            thirdTitle={'lor sit amet, consectetuer\nlor sit amet, consectetuer'}
            backgroundImage={background_TopSection}
            fontColor="#ffffff"
            lineBorder="1px solid #ffffff"
            firstLineWidth="85px"
          />

          <Features
            height={380}
            title="Features"
            description={'100% recycled content .\n100% SAYA Recyclable.\nMore chlorine and chemical resistant than Spandex.'}
            titleWidth="545px"
            descriptionWidth="460px"
            fontColor="#000000"
            lineBorder="solid 1px #000000"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height={586}
              backgroundImage={introduction1}
              title="Lor sit amet, consectetuer ad"
              subtitle="lor sit amet, consectetuer ad"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore."
              titleWidth={600}
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>

          <div style={{ marginTop: 35 }}>
            <TitleWithContent
              height={586}
              backgroundImage={material}
              title="Lor sit amet, consectetuer ad"
              titleWidth={600}
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>


          <div style={{ marginTop: 35 }}>
            <TitleWithContent
              height={900}
              title="Spec"
              titleWidth={600}
              fontColor="#000000"
              lineBorder="solid 1px #000000"
            >
              <div style={{ display: 'flex', justifyContent: 'center', }}>
                <Table />
              </div>
            </TitleWithContent>
          </div>

          <TitleLineBox
            title="Other SAYA Performance fibers"
            height="730px"
            fontColor="#000000"
            boxWidth={900}
            lineBorder="solid 1px #979797"
            backgroundColor="transparent"
          >
            <Chromuch />
            <SayaStretch />
            <SayaMicrofiber />
          </TitleLineBox>

        </Layout>
      </div>
    )
  );