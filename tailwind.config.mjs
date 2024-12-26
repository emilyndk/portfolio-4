/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj din egen farvepalette nedenfor */
        colors: {
             transparent: 'transparent',
             current: 'currentColor',
             'lavender': {
                 500: '#E2D9FF',
                 600: '#755CCE',
                 
             },

             'lime': {
                 500: '#C2E668',
                 600: '#5A8438',
                 
             },


             'isabelline': '#F4F3F0',
             'night': '#0C090D',
         },

         spacing: {
            'radius-m': '40px',
            'bm': '1.2px',
            'bd': '3px',
            'padding-2xs': '5px',
            'padding-xs': '16px',
            'padding-sm': '32px',
            'padding-m': '40px',
            'padding-ml': '48px',
            'padding-xl': '80px',
            'padding-3xl': '112px',
            'padding-4xl': '128px',
            'padding-4.1xl': '198px',
            'padding-5xl': '322px',
            'padding-6xl': '424px',
            'padding-button-x-d':'48px',
            'padding-button-y-d':'16px',
            'padding-button-x-m':'40px',
            'padding-button-y-m':'8px',

            'padding-button-card-x-d':'39px',
            'padding-button-card-y-d':'1px',
            'padding-button-card-x-m':'30px',
            'padding-button-card-y-m':'3px',
            'margin-x-d':'48px',
            'margin-x-m':'32px',
    
      
            
          },

          fontFamily: {
            headline: ['itc-american-typewriter', 'serif'],
            body: ['elza-text', 'sans-serif'],
            
          },
      
          fontSize: {
            base: ['1rem', { lineHeight: '1.5rem' }],
            large: ['2.5rem', { lineHeight: '3.75rem' }],
          },
          borderWidth: {
            DEFAULT: '3px',
            'bd': '3px', // Custom border width
            'bm': '1.8px', // Custom mobile border width
          },
         
      
          extend: {
            fontSize: {
              
              // Headings H1 desktop
              'h1-hero-d': ['110px', { lineHeight: '110%' }],
              'h1-m-d': ['80px', { lineHeight: '110%' }],
              'h1-card-d': ['30px', { lineHeight: '36px' }],

               // Headings H1 mobile
               'h1-hero-m': ['50px', { lineHeight: '110%' }],
               'h1-m-m': ['35px', { lineHeight: '38.8px' }],
               
      
              // Headings H2 desktop
              'h2-m-d': ['50px', { lineHeight: '60px',}],

               // Headings H2 mobile
               'h2-m-m': ['26px', { lineHeight: '37px',  }],
             
      
              // Body desktop
              'body-l-d': ['30px', { lineHeight: '36px',  }],
              'body-m-d': ['28px', { lineHeight: '45px',  }],
              'body-s-d': ['20px', { lineHeight: '40px', }],
              'body-card-d': ['15px', { lineHeight: '20px',  }],

               // Body mobile
               'body-l-m': ['25px', { lineHeight: '30px',  }],
               'body-m-m': ['15px', { lineHeight: '28px',  }],
               'body-s-m': ['12px', { lineHeight: '33px',  }],

                // Button desktop
                'button-d': ['30px', { lineHeight: '36px',  }],
                'button-card-d': ['20px', { lineHeight: '36px',  }],

                // Button mobile
                'button-m': ['20px', { lineHeight: '24px', }],
                'button-card-m': ['15px', { lineHeight: '24px', }],
                
               
    
            },

            
    
    
    
             
          },
        },
      
        plugins: [
          require('@tailwindcss/typography'),
          require('@tailwindcss/forms'),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/container-queries'),
          
        ],
      };