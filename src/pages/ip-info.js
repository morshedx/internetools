/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Nav from 'components/nav';
import InfoTable from 'components/info-table';
import GoogleMap from 'components/google-map';
import Seo from 'components/seo';

const IpInfo = () => {
  return (
    <>
      <Seo title="IP Info | Internet Tools" />
      <Container>
        <Nav />
        <InfoTable />
        <GoogleMap />
      </Container>
    </>
  );
};

export default IpInfo;
