import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { App } from './app'
import { GlobalStyle } from './Styles/globalStyle'
import { ResetCSS } from './Styles/resetCSS'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetCSS/>
    <GlobalStyle/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
