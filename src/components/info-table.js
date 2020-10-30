/** @jsx jsx */
import { useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { Tabs } from '@bumaga/tabs';
import { IpContext } from 'context/ip-context';
import Location from 'components/ip-info/location';
import Asn from 'components/ip-info/asn';
import Currency from 'components/ip-info/currency';
import TimeZone from 'components/ip-info/time-zone';
import { Tab, Panel } from 'components/tab';

const InfoTable = () => {
  const { data } = useContext(IpContext);

  return (
    <Box sx={styles.infoTable}>
      <Tabs>
        <div sx={styles.tabButtons}>
          <Tab>Location</Tab>
          <Tab>ASN</Tab>
          <Tab>Currency</Tab>
          <Tab>Time Zone</Tab>
        </div>

        <Panel>
          <Location sx={styles.card} data={data} />
        </Panel>
        <Panel>
          <Asn sx={styles.card} data={data} />
        </Panel>
        <Panel>
          <Currency sx={styles.card} data={data} />
        </Panel>
        <Panel>
          <TimeZone sx={styles.card} data={data} />
        </Panel>
      </Tabs>
    </Box>
  );
};

export default InfoTable;

const styles = {
  infoTable: {
    // gap: 6,
    // display: 'grid',
    // gridTemplateColumns: 'repeat(2,1fr)',
    // marginBottom: 7,
    boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  tabButtons: {
    backgroundColor: 'white',
    borderBottom: (t) => `5px solid ${t.colors.primary}`,
    padding: '10px 30px 0',
    gridColumn: '1/3',
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(4, 1fr)',
    button: {
      backgroundColor: 'white',
      border: 0,
      borderRadius: '4px 4px 0 0',
      color: 'text',
      cursor: 'pointer',
      fontFamily: 'body',
      fontSize: 3,
      minHeight: 45,
      padding: '0 25px',
      mr: 3,
      outline: 0,
      fontWeight: 400,
    },
    '.active': {
      backgroundColor: 'primary',
      color: 'white',
    },
  },
};
