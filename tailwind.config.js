/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyberGreen: '#00FF66',
        cyberGreenHover: '#00DD55',
        darkBlack: '#080808',
        darkCard: '#121212',
        darkGray: '#1c1c1c',
        netflixBlack: '#080808', // backward compatibility
        netflixDark: '#000000',  // backward compatibility
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0, 255, 102, 0.2)' },
          '50%': { borderColor: 'rgba(0, 255, 102, 0.8)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.8s ease-in forwards',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        borderGlow: 'borderGlow 2s ease-in-out infinite',
      },
      boxShadow: {
        neon: '0 0 15px rgba(0, 255, 102, 0.4)',
        neonHover: '0 0 25px rgba(0, 255, 102, 0.6)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
};
