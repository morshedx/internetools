/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';
import styles from './card.styles';

const Asn = ({ data }) => {
  return (
    <div sx={styles.card}>
      <Box as="ul">
        <li>
          <span>IP :</span> <span>{data?.ipData?.ip}</span>
        </li>
        <li>
          <span>ASN :</span> <span>{data?.ipData?.asn?.asn}</span>
        </li>
        <li>
          <span>Domain :</span> <span>{data?.ipData?.asn?.domain}</span>
        </li>
        <li>
          <span>Name :</span> <span>{data?.ipData?.asn?.name}</span>
        </li>
      </Box>
    </div>
  );
};

export default Asn;
