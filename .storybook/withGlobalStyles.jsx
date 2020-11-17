import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/themes'

export const withGlobalStyles = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
)

