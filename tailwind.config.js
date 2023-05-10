module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          "primary": "#162466",
          "dark": "#181B31",
        },
        gray: {
          "light": "#D6D6E3",
          "dark": "#555555",
        },
        red: {
          "dark": "#FF3B33",
          "light": "#FFD1C8",
        }
      },
    },
    fontFamily: {
      nunito: ["Nunito, Noto Sans, sans-serif"],
      noto: ["Noto Sans, sans-serif"],
    },
    backgroundImage: {
      "bannerimage": "url('/images/Background.png')",
      "cardbg": "url('/images/card-bg-image.png')",
      "processbg": "url('/images/process-bg.png')",
      "testimonialbg": "url('/images/testimonial-bg.png')",
      "subscribebg": "url('/images/Subscribe-bg-img.png')",
      "aboutus-bg": "url('/images/aboutusbg-img.png')",
      "service-cta-bg": "url('/images/service-cta.png')",
      "service-banner-bg": "url('/images/services-bg.png')",
      "contactus-banner-bg": "url('/images/service-cta.png')",
      "terms-banner-bg": "url('/images/tc-bg.png')",
      "terms-content-bg": "url('/images/terms-bg.png')",
      "career-banner-bg": "url('/images/service-cta.png')",
      "blog-card-bg": "url('/images/Blog-bg.png')",
      "join-us-bg": "url('/images/join-us-bg.png')",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: '1320px'
      },
    },

  },
  plugins: [],
}

