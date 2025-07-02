module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',  // Purple
        secondary: '#F59E0B', // Amber
        accent1: '#3B82F6',   // Blue
        accent2: '#10B981',   // Green
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-purple': '0 0 15px 3px rgba(109, 40, 217, 0.7)',
        'glow-amber': '0 0 15px 3px rgba(245, 158, 11, 0.7)',
      },
    },
  },
  plugins: [],
};
