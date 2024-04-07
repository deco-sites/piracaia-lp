import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        condensed: ['"Sofia Sans Extra Condensed"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
        mono: ['"Space Mono"', "mono"],
        console: ['"Press Start 2P"', "mono"],
      },
      textShadow: {
        'custom': '1px 1px 2px black',
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
