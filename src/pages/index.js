/** @jsx jsx */
import { jsx, Container, Box, Grid, Heading } from 'theme-ui';
import Nav from 'components/nav';
import InfoTable from 'components/info-table';
import GoogleMap from 'components/google-map';
import IpSearchForm from 'components/ip-search-form';
import Seo from 'components/seo';

const Index = () => {
  return (
    <>
      <Seo title="IP Info | Internet Tools" />
      <Container>
        <Nav />
        <Grid sx={styles.gird}>
          <Heading sx={styles.title}>What is My IP?</Heading>
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

export default Index;

const styles = {
  gird: {
    gap: 7,
    gridTemplateColumns: '1fr 1fr',
  },
  title: {
    gridColumn: '1/3',
    fontFamily: 'Metropolis',
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
  },
  searchForm: {
    gridColumn: '1/3',
    backgroundColor: 'white',
    padding: 6,
    boxShadow: '0px 20px 50px rgba(59,90,136,0.05)',
    borderRadius: 10,
  },
};
