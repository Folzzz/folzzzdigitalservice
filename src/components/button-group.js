/** @jsx jsx */
import { jsx, Box, Container, Flex } from 'theme-ui';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from 'react-scroll';

export default function ButtonGroup({ next, previous }) {
  return (
    <Flex sx={{ width: '100%'}}>
      <Container>

        <Box sx={styles.buttonGroup} className="button__group">
          <Button onClick={previous} aria-label="Previous">
            <IoIosArrowRoundBack />
          </Button>

          <Button onClick={next} aria-label="Next">
            <IoIosArrowRoundForward />
          </Button>
        </Box>

      </Container>
    </Flex>
  );
}

const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: -4,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 40,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'text',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
