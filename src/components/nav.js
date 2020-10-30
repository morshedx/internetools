/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

const Nav = () => {
  return (
    <nav sx={styles.nav}>
      <Link href="/">
        <a sx={styles.logo}>internetTools.dev</a>
      </Link>
      <ul sx={styles.navbar}>
        <li>
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-link">Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/ip-info">
            <a className="nav-link">Ip Info</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            activeClassName="active"
            href="/[slug]"
            as="/dynamic-route"
          >
            <a className="nav-link">Dynamic Route</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;

const styles = {
  nav: {
    py: 3,
    mb: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: 'heading',
    cursor: 'pointer',
    fontWeight: 700,
    textDecoration: 'none',
  },
  navbar: {
    alignItems: 'center',
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    li: {
      a: {
        color: 'text',
        mx: 3,
        textDecoration: 'none',
      },
      '.active': {
        color: 'primary',
      },
    },
  },
};
