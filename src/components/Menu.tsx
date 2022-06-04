import "./Menu.css";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import Popup from "./Popup";
import { cashOutline } from "ionicons/icons";
import { currencyStore } from "../appStore";
import { useLocation } from "react-router-dom";

const Menu: React.FC = () => {
  const location = useLocation();

  const currencies = currencyStore.useState();

  return (
    <IonMenu contentId="main" type="reveal">
      <IonContent>
        <IonList id="currency-list">
          <IonListHeader>Currencies</IonListHeader>
          <IonNote>Check out exchange rates</IonNote>
          {currencies.map((currencyPage, index) => {
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
                  <IonLabel>{currencyPage.code}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItemDivider />
          <Popup />
          {/* onClick={togglePopUp} */}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
