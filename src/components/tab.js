import { useTabState, usePanelState } from '@bumaga/tabs';
import { Button } from 'theme-ui';

export const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <Button
      variant="default"
      onClick={onClick}
      className={isActive ? 'active' : ''}
    >
      {children}
    </Button>
  );
};

export const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <div>{children}</div> : null;
};
