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
import { Redirect, Route } from "react-router-dom";

import { IonReactRouter } from "@ionic/react-router";
import Menu from "./components/Menu";
import Page from "./pages/Page";
import Popup from "./components/Popup";
import { useState } from "react";

interface currencies {
  curriencies:string
}

setupIonicReact();

const App: React.FC = () => {

  /*
  const [currencies,updateCurriences]  = useState([]);

  const addCurrency = (currency: any) => {
    updateCurriences([currencies,currency]);
  }
  */

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />

          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              {/* TODO: create home page */}
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/currency/:name" exact={true}>
              {/* TODO: allow to request for `/currency/{CURR_CODE}` */}

              <Page />

            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>

    </IonApp>
  );
};

export default App;
