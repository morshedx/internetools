/** @jsx jsx */
import { jsx, Input, Button, Label } from 'theme-ui';
import { useState, useEffect, useContext } from 'react';
import { IpContext } from 'context/ip-context';

const IpSearchForm = () => {
  const { data, setCurrentIp } = useContext(IpContext);
  const [ipInput, setIpInput] = useState('');

  useEffect(() => {
    setIpInput(data.ipData.ip);
  }, [data]);

  const handleChange = (e) => {
    setIpInput(e.target.value);
  };

  const handleSubmit = () => {
    setCurrentIp(ipInput);
  };

  return (
    <div sx={styles.form} onSubmit={handleSubmit}>
      <Label variant="styles.srOnly" htmlFor="ip-address">
        IP Address
      </Label>
      <Input id="ip-address" defaultValue={ipInput} onChange={handleChange} />
      <Button onClick={handleSubmit}>Lookup</Button>
    </div>
  );
};

export default IpSearchForm;

const styles = {
  form: {
    maxWidth: 600,
    mx: 'auto',
    display: 'flex',
    alignItems: 'center',
    input: {
      borderColor: '#e3e3e3',
      width: 'auto',
      flexGrow: 1,
      fontSize: [7],
    },
    button: {
      ml: 3,
    },
  },
};
