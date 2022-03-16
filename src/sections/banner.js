/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button, Link } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import BannerImg1 from 'assets/banner222.jpg';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import illustrateLeft from 'assets/new-illu2.svg';
import illustrateRight from 'assets/new-illu.svg';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">

      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Helping You To Conquer The World
          </Heading>
          <Text as="p" variant="heroSecondary">
            We offer full range of web designs and development services That are reliable, affordable and excellent
          </Text>

          <Link href="#services" variant="default">
            <Button variant="primary">Explore</Button>
          </Link>
          
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg1} alt="banner" />

        </Box>
      </Container>

    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${illustrateLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '80px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${illustrateRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        borderRadius: '16px',
        boxShadow: "-10px 10px 20px 20px rgba(0,0,0,0.1)",
        height: [245, 'auto'],
      },
    },
  },
};
