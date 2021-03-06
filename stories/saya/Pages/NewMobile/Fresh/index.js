import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import ProductFeatures from 'library/saya/Rick/ProductFeatures';
import Section2 from 'library/saya/Rick/Section2';
import TitleButton from 'library/saya/Rick/TitleButton';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import CollapseTable from 'library/saya/Rick/CollapseTable';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner08.jpg';
import SectionBG from '../../../img/mobile/m_product02.jpg';

storiesOf('saya|Pages/NewMobile', module)
  .add('Fresh',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={550}
            firstTitle="PERFORMANCE"
            title="High Performance Antibacterial Fiber"
            subtitle="FRESH"
            backgroundImage={background_TopSection1}
            titleFontFamily="bold"
            subtitleFontFamily="light"
            paddingTop={92}
            titlePaddingTop={43}
            subtitlePaddingTop={16}
          />

          <div style={{ marginTop: 6 }}>
            <ProductFeatures
              title="PRODUCT FEATURES"
              list={[
                'Certified Anti Bacterial Performance over 50 Washes',
                'Prevents Odor Spreading Organisms',
                'Skin Friendly and Non-Leaching Zinc Oxide',
              ]}
            />
          </div>

          <CollapseSection
            height="375px"
            title="High Performance Antibacterial,Infused in Recycled Fiber"
            subtitle="Nature and Skin Friendly Non-leaching Zinc Oxide "
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={`By effectively hindering the growth of bacteria, fungus and odors, SAYA Fresh extends the life of each wear with permanent bacteria and odor control. Zinc oxide interrupts bacterial and fungi metabolism and prevents growth.
 
Certified Anti Bacterial Performance over 50 Washes:  AATCC 100, ISO 20743, 
            
Certified Anti Fungi Performance over 50 Washes:  AATCC 30-2013 Test III `}
          />

          <div style={{ marginTop: 6 }}>
            <Section2
              color="#FFFFFF"
              title={'Renewed Fresh and\nStays Fresh'}
              backgroundImage={SectionBG}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <TitleButton
              color="#ffffff"
              title={`Learn more about\nSAYA Next Technology.`}
              onClick={() => { }}
              label="Learn More"
              background="#444343"
            />
          </div>

          <CollapseTable
            title={'FRESH\nProduct Specs'}
          />
          <TechnologyProjects
            height={1018}
            backgroundColor="#e3e3e3"
            title="See Technology Projects"
            list={[
              {
                title: "For Every Task and Budget",
                buttonText: "Learn More",
                disabled: false,
                type: <span>SAYA</span>,
                typeBack: <span>365</span>,
              },
              {
                title: "Color without Compromise",
                buttonText: "Learn More",
                disabled: false,
                type: <span>CHROMUCH Solution Dyed</span>,
              },
              {
                title: "Stretch Fibers with Good Conscious",
                buttonText: "Learn More",
                disabled: false,
                type: <span>STRETCH</span>,
              },
              {
                title: "Fluffy Soft, Ultimate Drape and Versatile",
                buttonText: "Learn More",
                disabled: false,
                type: <span>MICROFIBER</span>,
              },
            ]}
          />
        </MobileLayout>
      </div>
    )
  );
