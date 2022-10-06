import { useState } from "react";
import { IntlProvider } from "react-intl";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import intl from '../src/assests/intl'
import "./assests/styling/global.scss";
import "./assests/styling/variables.scss";
import "./App.scss";

function App() {
  // eslint-disable-next-line
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider messages={intl[locale]} locale={locale} defaultLocale="en">
    <div className="app-root flexColumn flexGrow">
      <Header />
      <Portfolio />
    </div>
    </IntlProvider>
  );
}

export default App;
