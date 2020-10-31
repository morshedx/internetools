/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { IpContext } from 'context/ip-context';
import mapMarker from 'assets/images/icons/map-marker.png';

const Marker = ({ text }) => <img src={mapMarker} alt="map marker" />;

const GoogleMap = () => {
  const { data } = useContext(IpContext);
  const mapOptions = {
    // center: [data?.ipData?.latitude, data?.ipData?.longitude],
    center: {
      lat: data?.ipData?.latitude,
      lng: data?.ipData?.longitude,
    },
    zoom: 11,
    // greatPlaceCoords: {lat: data?.ipData?.latitude, lng: data?.ipData?.longitude}
  };

  return (
    <div sx={styles.mapCanvas}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
        }}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
      >
        <Marker
          lat={mapOptions.center.lat}
          lng={mapOptions.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};
export default GoogleMap;

const styles = {
  mapCanvas: {
    width: '100%',
    height: 350,
    position: 'relative',
    marginLeft: 'auto',
  },
};
