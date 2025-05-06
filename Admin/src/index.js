import React from "react"
import ReactDOM from "react-dom/client"
import "./i18n"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "./index.css"
import { FormProvider } from "context/FormContext"

import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <>
      <FormProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </FormProvider>
    </>
  </Provider>,
)

serviceWorker.unregister()
