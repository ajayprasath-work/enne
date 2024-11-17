import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#043156',
        secondary:'#D5B0C2',
        paragraph:'#041B37',
        secondaryLight:'#d5b0c233',
        Testprimary:"#ED1C24",
        Testsecondary:"#041B37",
        textDark:'#2B2B2B',
        primaryBorder:'#C70A11',
        formText:'#0C1421',
        inputBorder:"#FFC9CB",
        placeHolder:'#8897AD',
        Microprimary:'#041B37',
        Microsecondary:'#072853',
        MicrosecondaryLight:'#043156',
        gray:{
          150:'#FDFDFD',
          170:'#B9ABC8',
          180:'#f7f7f7',
          190:'#FDFDFD',
          210:'#969696',
          220:'#CCC6C6',
          230:'#8D8D8D',
        },
        red:{
          150:'#041B37',
          250:'#ED1C24',
          850:'#ED1C24',
          50:'#FFC9CB',
          450:'#FFEFF0',
          650:'#8897AD'
        },
        Microred:{
          150:'#ED1C24',
          250:'#C70A11',
        },
        violet:{
          100:'#B9ABC8',
          200:'#C7B7D8',
          300:'#D5B0C2',
          400:'#FFEFF0',
          500:'#FFC9CB',
          600:'#8897AD',
          700:'#294957',
  
        },
        light:{
          150:'#B9ABC8',
          250:'#e7f7fa80',
          350:'#CFDFE2',
          450:'#8897AD',
          550:'#E7F7FA',
        },
        Microlight:{
          150:'#E7F7FA',
          250:'#e7f7fa80',
          350:'#CFDFE2',
          400:'#8E8E93'
        },
        darkBlue:{
          100:'#043156',
        },
        darkText:'#1C1B1F',
        Testlight:{
          100:"#e7f7fa80",
          150:"#E7F7FA",
          200:'#D9D9D9',
          300:'#FFEFF0',
          400:'#8C8C8C'
        }
        },

      fontFamily:{
         poppins:'var(--Poppins)',
         roboto:'var(--Roboto)',
      },
      fontSize:{
      'xxl':'4rem',
      "2xxl":'3.5rem',
      'xxxl':'3.5rem',
      '1xl':'1.375rem',
      },
      backgroundColor:{
        "header_bg":'rgba(4, 27, 55, 0.67)',
      },
      letterSpacing:{
        lg:'0.06rem',
        xl:'0.018rem',
        xxl:'0.03rem',
        "2xl":'0.045rem',
        "3xl":'0.08rem',
        "4xl":'0.025rem',
        "5xl":'0.07rem',
      },
      borderRadius:{
        '4xl':'4.5rem',
        '5xl':'6.25rem',
        '20':'1.25rem',
         '40':'0.276rem',
         '5xxl':'100px',
         '4xxl':'40px',
         '2xxl':'20px',
         'xxl':'10px',
         '6xl':"6.25rem",
      },
      height:{
         '600':'37.5rem',
      },
      spacing:{
        9.5 : '95%',
        600 : '37.5rem',
        428 : '26.75rem',
        345 : '21.563rem'
      },
      backgroundImage:{
        "hero_banner":"url('/assets/images/hero_banner.webp')",
        "testimonial_bg":"url('/assets/images/testi_BG.webp')",
        'Corporate-Personality':"linear-gradient(rgba(4,27,55,0.60),rgba(4,27,55,0.60)),url('/assets/images/Corporate-Personality.webp')",
        'controlling-authoritarian':"linear-gradient(rgba(4,27,55,0.60),rgba(4,27,55,0.60)),url('/assets/images/banner_img_3.webp')",
        'Ways-to-Manage-It':"linear-gradient(rgba(4,27,55,0.60),rgba(4,27,55,0.60)),url('/assets/images/banner_img_1.webp')",
        'Jeffrey-Lim':"linear-gradient(rgba(4,27,55,0.60),rgba(4,27,55,0.60)),url('/assets/images/banner_img_2.webp')",
        'why-should':"linear-gradient(rgba(4,27,55,0.60),rgba(4,27,55,0.60)),url('/assets/images/why-should.webp')",
        'linear-bg':"linear-gradient(rgba(0, 0, 0, 0.00)10%, rgba(0, 0, 0))",
        'hero_banner_micro':'url(/assets/images/hero_banner_2.webp)',
        'hero_banner_1':'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/images/hero_banner_2.webp)',
        'about':'radial-gradient(76.33% 76.33% at 50% 50%, #ED1C24 0%, #871015 100%)',
        'login_banner':'url(/assets/images/login_bg.webp)',
      },
      lineHeight:{
        'lg':'2.1rem',
        'xl':'4.2rem',
        'xxl':'5.2rem',
        '2xxl':'4.2rem',
      },
      boxShadow:{
        // 'xxl':'rgba(255, 255, 255, 0.35) 0px 5px 15px',
        '2xl':'0px 4px 14px 0px rgba(0, 0, 0, 0.10)',
        '5xl':' 0px 4px 14px 0px rgba(0, 0, 0, 0.10)',
        '6xl':'0px 4px 40px 0px rgba(0, 0, 0, 0.20)',
      }
    },
  },
  plugins: [],
} satisfies Config;
