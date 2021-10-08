import React from 'react'

import { Routes } from './src/routes'

import theme from './src/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}