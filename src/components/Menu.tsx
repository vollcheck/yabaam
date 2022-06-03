import "./Menu.css";

import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { add, cashOutline } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";

interface CurrencyPage {
  title: string;
  url: string;
}

// TODO: Load that statically
const currencyPages: CurrencyPage[] = [
  {
    title: "GBP",
    url: "/currency/GBP",
  },
  {
    title: "EUR",
    url: "/currency/EUR",
  },
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="currency-list">
          <IonListHeader>Currencies</IonListHeader>
          <IonNote>Check out exchange rates</IonNote>
          {currencyPages.map((currencyPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === currencyPage.url ? "selected" : ""
                  }
                  routerLink={currencyPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={cashOutline} />
                  <IonLabel>{currencyPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
           
        </IonList>          
        <Popup></Popup>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
