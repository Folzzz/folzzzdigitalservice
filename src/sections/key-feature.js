/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: 'https://img.icons8.com/ios-filled/50/fa314a/speed.png',
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Top level techniques to provide the highest possible experience.',
  },
  {
    id: 2,
    imgSrc: 'https://img.icons8.com/ios-filled/50/fa314a/right-navigation-toolbar.png',
    altText: 'Easy Navigation',
    title: 'Easy Navigation',
    text:
      'Easy to use, simple and elegant.',
  },
  {
    id: 3,
    imgSrc: 'https://img.icons8.com/external-nawicon-flat-nawicon/64/fa314a/external-responsive-seo-and-marketing-nawicon-flat-nawicon.png',
    altText: 'Mobile Responsiveness',
    title: 'Mobile Responsiveness',
    text:
      'Perfect look for gadgets of any size.',
  },
  {
    id: 4,
    imgSrc: 'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/fa314a/external-customer-testimonial-inipagistudio-mixed-inipagistudio.png',
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Steady customer support option to follow suite.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id="services">

     <Container>
       <SectionHeader 
        slogan="What do you get"
        title="Benefits of Working With Us"
       />
       <Grid sx={styles.grid}>
        {
          data.map((item) => (
            <FeatureCardColumn 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))
        }
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
