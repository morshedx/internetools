export default {
  card: {
    // backgroundColor: 'white',
    // borderRadius: 10,
    padding: 5,
    // boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
    h3: {
      mb: 3,
    },
    ul: {
      listStyle: 'none',
      padding: 0,
    },
    li: {
      py: 2,
      '+ li': {
        borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      },
    },
  },
};
