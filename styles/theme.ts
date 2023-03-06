import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          '& ::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '& ::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 5px #fff`,
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor: '#C4C8CC',
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb:hover': {},
        },
      },
    },
  },
  typography: {
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeightRegular: 'normal',
    h1: {
      fontSize: 29,
      fontWeight: 700,
    },
    h2: {
      fontSize: 28,
      fontWeight: 400,
    },
    h3: {
      fontSize: 22,
      fontWeight: 700,
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
    },
    h5: {
      fontSize: 17,
      fontWeight: 500,
    },
    h6: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 400,
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 11,
    },
    caption: {
      fontSize: 10,
    },
    responsiveH1: {
      font: 'normal normal normal 22px/29px Roboto',
    },
    responsiveH2: {
      font: 'normal normal normal 18px/24px Roboto',
    },
    responsiveH3: {
      font: 'normal normal normal 14px/19px Roboto',
    },
    responsiveH4: {
      font: 'normal normal normal 13px/13px Roboto',
    },
    responsiveH5: {
      font: 'normal normal normal 11px/13px Roboto',
    },
  },
  palette: {
    primary: { main: '#074682', dark: '#074682', contrastText: '#0e68b0' },
    secondary: { main: '#EEE7DE', dark: '#BDA173' },
    green: {
      light: '#DFF1EA',
      main: '#E6F4EF',
      dark: '#5AB895',
      contrastText: '#5EB796',
    },
    red: { light: '#F5CEC4', main: '#FAE8E4', dark: '#DB6751' },
    yellow: { main: '#FEF4DF', dark: '#F0A91A' },
    indigo: { main: '#47417D', dark: '#0E093D' },
    white: {
      light: '#f5f6f7',
      main: '#FAFBFC',
      dark: '#fff',
      contrastText: '#F8F8F8',
    },
    black: {
      light: '#54575E',
      main: '#202124',
      dark: '#000',
      contrastText: '#919599',
    },
    gray: {
      light: '#DFE5EC',
      main: '#797B80',
      dark: '#66707a',
      contrastText: '#E1E3E6',
    },
    purple: { light: '#aea9d6', main: '#784af4', dark: '' },
    blueGrey: { light: '#9bb4cc', main: '', dark: '#233342' },
    amber: {
      light: '#BDA173',
      main: '#BCA076',
      dark: '#EDE3D5',
      contrastText: '#F0E8DD',
    },
    orange: { light: '#F7F2EB', main: '', dark: '' },
    mixed: {
      light: '#FCFCFC',
      main: '#EBF7F3',
      dark: '#F7FAFC',
      contrastText: '#A4A8B3',
    },
    other: {
      light: '#46477A',
      main: '#F7F7F7',
      contrastText: '#222353',
      dark: '#B0F5DC',
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary']
    red: Palette['primary']
    yellow: Palette['primary']
    indigo: Palette['primary']
    white: Palette['primary']
    black: Palette['primary']
    gray: Palette['primary']
    purple: Palette['primary']
    blueGrey: Palette['primary']
    amber: Palette['primary']
    orange: Palette['primary']
    mixed: Palette['primary']
    other: Palette['primary']
  }

  interface PaletteOptions {
    green?: PaletteOptions['primary']
    red?: PaletteOptions['primary']
    yellow?: PaletteOptions['primary']
    indigo?: PaletteOptions['primary']
    white?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
    gray?: PaletteOptions['primary']
    purple?: PaletteOptions['primary']
    blueGrey?: PaletteOptions['primary']
    amber?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    mixed?: PaletteOptions['primary']
    other?: PaletteOptions['primary']
  }

  interface TypographyVariants {
    responsiveH1: React.CSSProperties
    responsiveH2: React.CSSProperties
    responsiveH3: React.CSSProperties
    responsiveH4: React.CSSProperties
    responsiveH5: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    responsiveH1?: React.CSSProperties
    responsiveH2?: React.CSSProperties
    responsiveH3?: React.CSSProperties
    responsiveH4?: React.CSSProperties
    responsiveH5?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    responsiveH1: true
    responsiveH2: true
    responsiveH3: true
    responsiveH4: true
    responsiveH5: true
  }
}

export default theme
