const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const config = {
	content: [
		'../../packages/components/**/*.{html,js,svelte,svx,ts}',
		'./src/**/*.{html,js,svelte,svx,ts}'
	],

	darkMode: 'class',

	theme: {
		fontFamily: {
			'sans': ['Custom Font', ...defaultTheme.fontFamily.sans],
			'serif': ['Custom Font', ...defaultTheme.fontFamily.serif],
			'mono': ['Custom Font', ...defaultTheme.fontFamily.mono]
		},

		extend: {
      colors: {

        /* brand
        *************************************************************************************************/
        brand: {
          DEFAULT:        'rgb(var(--color-brand) / <alpha-value>)',
          1:              'rgb(var(--color-brand-1) / <alpha-value>)',
          2:              'rgb(var(--color-brand-2) / <alpha-value>)',
          
          // primary
          'primary':      'rgb(var(--color-brand-primary) / <alpha-value>)',
          'primary-1':    'rgb(var(--color-brand-primary-1) / <alpha-value>)',
          'primary-2':    'rgb(var(--color-brand-primary-2) / <alpha-value>)',
          'primary-3':    'rgb(var(--color-brand-primary-3) / <alpha-value>)',
          'primary-4':    'rgb(var(--color-brand-primary-4) / <alpha-value>)',
          'primary-5':    'rgb(var(--color-brand-primary-5) / <alpha-value>)',
          'primary-6':    'rgb(var(--color-brand-primary-6) / <alpha-value>)',
          'primary-7':    'rgb(var(--color-brand-primary-7) / <alpha-value>)',
          'primary-8':    'rgb(var(--color-brand-primary-8) / <alpha-value>)',
          'primary-9':    'rgb(var(--color-brand-primary-9) / <alpha-value>)',

          // secondary
          'secondary':    'rgb(var(--color-brand-secondary) / <alpha-value>)',
          'secondary-1':  'rgb(var(--color-brand-secondary-1) / <alpha-value>)',
          'secondary-2':  'rgb(var(--color-brand-secondary-2) / <alpha-value>)',
          'secondary-3':  'rgb(var(--color-brand-secondary-3) / <alpha-value>)',
          'secondary-4':  'rgb(var(--color-brand-secondary-4) / <alpha-value>)',
          'secondary-5':  'rgb(var(--color-brand-secondary-5) / <alpha-value>)',
          'secondary-6':  'rgb(var(--color-brand-secondary-6) / <alpha-value>)',
          'secondary-7':  'rgb(var(--color-brand-secondary-7) / <alpha-value>)',
          'secondary-8':  'rgb(var(--color-brand-secondary-8) / <alpha-value>)',
          'secondary-9':  'rgb(var(--color-brand-secondary-9) / <alpha-value>)',
        },
        
        /* primary
        *************************************************************************************************/
        // lite
        lite: {
          DEFAULT:   'rgb(var(--color-lite) / <alpha-value>)',
          primary:   'rgb(var(--color-lite-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-lite-secondary) / <alpha-value>)',
          dim:       'rgb(var(--color-lite-dim) / <alpha-value>)',

          1:         'rgb(var(--color-lite-1) / <alpha-value>)',
          2:         'rgb(var(--color-lite-2) / <alpha-value>)',
          3:         'rgb(var(--color-lite-3) / <alpha-value>)',
          4:         'rgb(var(--color-lite-4) / <alpha-value>)',
          5:         'rgb(var(--color-lite-5) / <alpha-value>)',
          6:         'rgb(var(--color-lite-6) / <alpha-value>)',
          7:         'rgb(var(--color-lite-7) / <alpha-value>)',
          8:         'rgb(var(--color-lite-8) / <alpha-value>)',
          9:         'rgb(var(--color-lite-9) / <alpha-value>)',
        },

        // dark
        dark: {
          DEFAULT:   'rgb(var(--color-dark) / <alpha-value>)',
          primary:   'rgb(var(--color-dark-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-dark-secondary) / <alpha-value>)',
          dim:       'rgb(var(--color-dark-dim) / <alpha-value>)',

          1:         'rgb(var(--color-dark-1) / <alpha-value>)',
          2:         'rgb(var(--color-dark-2) / <alpha-value>)',
          3:         'rgb(var(--color-dark-3) / <alpha-value>)',
          4:         'rgb(var(--color-dark-4) / <alpha-value>)',
          5:         'rgb(var(--color-dark-5) / <alpha-value>)',
          6:         'rgb(var(--color-dark-6) / <alpha-value>)',
          7:         'rgb(var(--color-dark-7) / <alpha-value>)',
          8:         'rgb(var(--color-dark-8) / <alpha-value>)',
          9:         'rgb(var(--color-dark-9) / <alpha-value>)',
        },
      },
      
      typography: ({ theme }) => ({
        
				DEFAULT: {
					css: {
						// '--tw-prose-bullets': theme('colors.black'),
						blockquote: {
							borderLeft: '3px solid inherit',
							fontSize: 'inherit',
							fontStyle: 'inherit',
							fontWeight: 'medium'
						},
						'blockquote p:first-of-type::before': {
							content: ''
						},
						'blockquote p:last-of-type::after': {
							content: ''
						},

						'code::before': false,
						'code::after': false,
						code: {
							'border-radius': '0.25rem',
							padding: '0.15rem 0.3rem',
							borderWidth: '2px',
							borderColor: 'rgb(var(--color-lite-2))',
						},

            '.dark code': {
							borderColor: 'rgb(var(--color-dark-2))',
            },

						a: {
							color: 'unset !important',
							textDecoration: 'none !important'
						},

						'a:hover': {
							color: 'unset !important',
							textDecoration: 'underline !important'
						},
						'a code': {
							color: 'unset !important'
						},

						'a.button': {
              color: 'unset !important',
							textDecoration: 'none !important',
						},

						'li, ul, ol': {
							margin: 0
						},
						'li > img': {
							margin: 0,
							display: 'inline'
						},

						// 'ol > li::marker': {
						// 	color: 'var(--tw-prose-body)'
						// },
						// 'ul > li::marker': {
						// 	color: 'var(--tw-prose-body)'
						// }
					}
				},

        scavenger: {
          css: {
            '--tw-prose-body':                  'rgb(var(--color-dark-secondary))',
            '--tw-prose-headings':              'rgb(var(--color-dark))',
            '--tw-prose-lead':                  'rgb(var(--color-dark))',
            '--tw-prose-links':                 'rgb(var(--color-brand-primary))',
            '--tw-prose-bold':                  'rgb(var(--color-dark))',
            '--tw-prose-counters':              'rgb(var(--color-dark))',
            '--tw-prose-bullets':               'rgb(var(--color-dark))',
            '--tw-prose-hr':                    'rgb(var(--color-lite-3))',
            '--tw-prose-quotes':                'rgb(var(--color-dark))',
            '--tw-prose-quote-borders':         'rgb(var(--color-brand-primary))',
            '--tw-prose-captions':              'rgb(var(--color-dark-dim))',
            '--tw-prose-code':                  'rgb(var(--color-dark-3))',
            '--tw-prose-pre-code':              'rgb(var(--color-dark-4))',
            '--tw-prose-pre-bg':                'rgb(var(--color-lite-2))',
            '--tw-prose-th-borders':            'rgb(var(--color-dark))',
            '--tw-prose-td-borders':            'rgb(var(--color-lite-3))',
        
            '--tw-prose-invert-body':           'rgb(var(--color-lite-4))',
            '--tw-prose-invert-headings':       'rgb(var(--color-lite))',
            '--tw-prose-invert-lead':           'rgb(var(--color-lite))',
            '--tw-prose-invert-links':          'rgb(var(--color-brand-primary-4))',
            '--tw-prose-invert-bold':           'rgb(var(--color-lite))',
            '--tw-prose-invert-counters':       'rgb(var(--color-lite))',
            '--tw-prose-invert-bullets':        'rgb(var(--color-lite))',
            '--tw-prose-invert-hr':             'rgb(var(--color-dark-3))',
            '--tw-prose-invert-quotes':         'rgb(var(--color-lite))',
            '--tw-prose-invert-quote-borders':  'rgb(var(--color-brand-primary))',
            '--tw-prose-invert-captions':       'rgb(var(--color-lite-dim))',
            '--tw-prose-invert-code':           'rgb(var(--color-lite-3))',
            '--tw-prose-invert-pre-code':       'rgb(var(--color-lite-3))',
            '--tw-prose-invert-pre-bg':         'rgb(var(--color-dark-2))',
            '--tw-prose-invert-th-borders':     'rgb(var(--color-lite))',
            '--tw-prose-invert-td-borders':     'rgb(var(--color-dark-2))',
          },
        },
      }),
		},
	},

	variants: {},

	plugins: [

    /* Typography
    ***************************************/
		require('@tailwindcss/typography'),

    /* Variants
    ***************************************/
    plugin(function({ addVariant }) {
      
      // relation
      addVariant('isActive', '&.active')
      addVariant('parentActive', '.active > &')
      addVariant('parentsUntilActive', '.active &')
      addVariant('childActive', '& .active')

      // component
      addVariant('headerActive', ['&.header--active', '.header--active &'])
      addVariant('linkActive', ['&.link--active', '.link--active &'])
      addVariant('menuActive', ['&.menu--active', '.menu--active &'])
      addVariant('sectionActive', ['&.section--active', '.section--active &'])
    })
	],
};

module.exports = config;