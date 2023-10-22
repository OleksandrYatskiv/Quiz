module.exports = {
  extends: 'your-base-config', // Extend your base ESLint config
  rules: {
    // Disable specific rules for Netlify builds
    'react-hooks/exhaustive-deps': 'off',
  },
};
