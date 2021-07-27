import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'The Vietnamese phin or phin filter is a coffee brewing tool most common and popular in Vietnam.',
    heading: 'Vietnamese phin coffee',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Vietnamese egg coffee (ca phe trung) is made by beating an egg yolk with sweetened condensed milk.',
    heading: 'Egg Coffee',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'A dish with two halves of an English muffin, each topped with bacon, a poached egg, and hollandaise sauce.',
    heading: 'Egg benedict',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: 'Olong Tea',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Our signature espresso with steamed nonfat milk, dark chocolate powder, and chocolate cookie syrup.',
    heading: 'Cookie Ice Blended',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'The perfect brekkie protein pairing, bacon and eggs come together in this super easy sandwich recipe.',
    heading: 'Bacon egg roll',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Our Menu"
          text="The best quality of coffee and food in Australia"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    alignItem: 'center',
    mb: '135px'
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
    width: '125%',
    ml: '-83px'
  },
};
