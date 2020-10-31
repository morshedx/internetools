/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';
import styles from './card.styles';

const Location = ({ data }) => {
  return (
    <div sx={styles.card}>
      <Box as="ul">
        <li>
          <span>Current Time :</span>{' '}
          <span>{data?.ipData?.time_zone?.current_time}</span>
        </li>
        <li>
          <span>Time Zone :</span> <span>{data?.ipData?.time_zone?.name}</span>
        </li>
      </Box>
    </div>
  );
};

export default Location;
