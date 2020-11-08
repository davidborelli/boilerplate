import GlobalStyles from '../src/styles/global'

export const withGlobalStyles = (Story) => (
  <>
    <GlobalStyles />
    <Story />
  </>
)

