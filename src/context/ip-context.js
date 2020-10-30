import React, { useState, useEffect, createContext } from 'react';
import useRequest from 'hooks/useRequest';
import axios from 'axios';

export const IpContext = createContext();

export const IpProvider = (props) => {
  const [currentIp, setCurrentIp] = useState('');
  const url = `https://api.ipdata.co/${currentIp}/?api-key=${process.env.NEXT_PUBLIC_IPDATA_API_KEY}`;

  const { data, setData } = useRequest(url);

  const getClientIp = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      setCurrentIp(response.data.ip);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getClientIp();
  }, []);

  return (
    <IpContext.Provider value={{ data, setData, currentIp, setCurrentIp }}>
      {props.children}
    </IpContext.Provider>
  );
};
