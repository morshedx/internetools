export default {
  // example colors with dark mode
  colors: {
    text: '#343D48', // body color and primary color
    textSecondary: '#02073E', // secondary body color
    heading: '#0F2137', // primary heading color
    headingSecondary: '#343D48', // heading color
    background: '#FFFFFF', // body background color
    backgroundSecondary: '#F9FBFD', // secondary background color
    borderColor: '#F3F4F5', // border color
    primary: '#56BBD0', // primary button and link color
    secondary: '#353448', // secondary color - can be used for hover states
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI
    dark: '#10132D',
    link: '#4F96FF', // default link color

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    },
  },
  fonts: {
    body: 'DM Sans, sans-serif',
    heading: 'DM Sans, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, // 0
    14, // 1
    16, // 2
    18, // 3
    20, // 4
    22, // 5
    24, // 6
    28, // 7
    30, //8
    32, // 9
    36, // 10
    42, // 11
    48, // 12
    52, // 13
    64, // 14
  ],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  space: [
    0, //0
    5, //1
    10, //2
    15, //3
    20, //4
    25, //5
    30, //6
    40, //7
    50, //8
    60, //9
    70, //10
    80, //11
    100, //12
    120, //13
    130, //14
    150, //15
  ],
  sizes: {},
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1200px',
    '1367px',
    '1440px',
  ],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, null, '970px', '1140px', '1260px'],
      paddingLeft: [6, 6],
      paddingRight: [6, 6],
      m: '0 auto',
    },
    main: {},
    footer: {},
  },
  text: {},
  links: {},
  images: {},
  // variants for buttons
  buttons: {
    default: {
      backgroundColor: 'transparent',
      fontFamily: 'body',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.3s ease-in-out 0s',
      whiteSpace: 'nowrap',
    },
    primary: {
      variant: 'buttons.default',
      backgroundColor: 'primary',
      color: 'white',
      padding: '0 25px',
      minHeight: 50,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'borderColor',
      minHeight: 50,
      padding: '0 20px',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
