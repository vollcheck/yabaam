/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";

import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";

import { CurrencyProvider } from "./currencyContext";
import HomePage from "./pages/HomePage";
import { IonReactRouter } from "@ionic/react-router";
import Menu from "./components/Menu";
import Page from "./pages/Page";
import { Route } from "react-router-dom";

setupIonicReact();

const App: React.FC = () => {
  return (
    <CurrencyProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />

            <IonRouterOutlet id="main">
              <Route path="/" exact={true} component={HomePage} />

              <Route path="/currency/:name" exact={true} component={Page} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </CurrencyProvider>
  );
};

export default App;
