/** @jsx jsx */
import { jsx, Container, Box, Grid } from 'theme-ui';
import Nav from 'components/nav';
import InfoTable from 'components/info-table';
import GoogleMap from 'components/google-map';
import IpSearchForm from 'components/ip-search-form';
import Seo from 'components/seo';

const IpInfo = () => {
  return (
    <>
      <Seo title="IP Info | Internet Tools" />
      <Container>
        <Nav />
        <Grid sx={styles.gird}>
          <Box sx={styles.searchForm}>
            <IpSearchForm />
          </Box>
          <GoogleMap />
          <InfoTable />
        </Grid>
      </Container>
    </>
  );
};

export default IpInfo;

const styles = {
  gird: {
    gap: 7,
    gridTemplateColumns: '1fr 1fr',
  },
  searchForm: {
    gridColumn: '1/3',
    backgroundColor: 'white',
    padding: 6,
    boxShadow: '0px 20px 50px rgba(59,90,136,0.05)',
    borderRadius: 10,
    marginBottom: 7,
  },
};
