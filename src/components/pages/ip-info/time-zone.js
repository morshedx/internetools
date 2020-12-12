/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import styles from './card.styles';

const Location = ({ data }) => {
  const date = data?.ipData?.time_zone?.current_time;

  return (
    <div sx={styles.card}>
      <Box as="ul">
        <li>
          <span>Current Time :</span>{' '}
          <span>
            {date}
            {/* {rezoned.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)} */}
            {/* {rezoned.DateTime.format('yyyy LLL dd')} */}
          </span>
        </li>
        <li>
          <span>Time Zone :</span> <span>{data?.ipData?.time_zone?.name}</span>
        </li>
      </Box>
    </div>
  );
};

export default Location;
