/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';
import styles from './card.styles';

const Location = ({ data }) => {
  return (
    <div sx={styles.card}>
      <Box as="ul">
        <li>
          <span>City :</span> <span>{data?.ipData?.city}</span>
        </li>
        <li>
          <span>Country :</span>{' '}
          <span>
            {data?.ipData?.emoji_flag} {data?.ipData?.country_name}
          </span>
        </li>
        {/* <li>
            <span>Languages :</span>{' '}
            <span>
              {data?.ipData?.languages?.map((lang, i) => (
                <span key={i}>
                  {lang.name}/{lang.native},{' '}
                </span>
              ))}
            </span>
          </li> */}
        <li>
          <span>Postal Code :</span> <span>{data?.ipData?.postal}</span>
        </li>
        <li>
          <span>Dialing Code :</span> <span>{data?.ipData?.calling_code}</span>
        </li>
      </Box>
    </div>
  );
};

export default Location;
