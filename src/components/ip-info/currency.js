/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';
import styles from './card.styles';

const Currency = ({ data }) => {
  return (
    <div sx={styles.card}>
      <Box as="ul">
        <li>
          <span>Currency Name :</span>{' '}
          <span>{data?.ipData?.currency?.name}</span>
        </li>
        <li>
          <span>Currency Symbol :</span>{' '}
          <span>{data?.ipData?.currency?.symbol}</span>
        </li>
        <li>
          <span>Currency Symbol Native :</span>{' '}
          <span>{data?.ipData?.currency?.native}</span>
        </li>
      </Box>
    </div>
  );
};

export default Currency;
