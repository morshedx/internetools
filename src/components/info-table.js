/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';
import IpSearchForm from 'components/ip-search-form';
import { useContext } from 'react';
import { IpContext } from 'context/ip-context';

const InfoTable = () => {
  const { data } = useContext(IpContext);

  return (
    <Box sx={styles.infoTable}>
      <div sx={{ gridColumn: '1/5' }}>
        <IpSearchForm />
      </div>
      <div sx={styles.card}>
        <Heading as="h3">Location</Heading>
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
            <span>Dialing Code :</span>{' '}
            <span>{data?.ipData?.calling_code}</span>
          </li>
        </Box>
      </div>
      <div sx={styles.card}>
        <Heading as="h3">ASN</Heading>
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
      <div sx={styles.card}>
        <Heading as="h3">Currency</Heading>
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
      <div sx={styles.card}>
        <Heading as="h3">Time Zone</Heading>
        <Box as="ul">
          <li>
            <span>Current Time :</span>{' '}
            <span>{data?.ipData?.time_zone?.current_time}</span>
          </li>
          <li>
            <span>Time Zone :</span>{' '}
            <span>{data?.ipData?.time_zone?.name}</span>
          </li>
        </Box>
      </div>
    </Box>
  );
};

export default InfoTable;

const styles = {
  infoTable: {
    gap: '30px 50px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    marginBottom: 7,
  },
  card: {
    h3: {
      mb: 3,
    },
    ul: {
      listStyle: 'none',
      padding: 0,
    },
    li: {
      py: 2,
      '+ li': {
        borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      },
    },
  },
};
