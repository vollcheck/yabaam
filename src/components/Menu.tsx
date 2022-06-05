import "./Menu.css";

import {
  IonButton,
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
import { cashOutline, trash } from "ionicons/icons";
import { currencyStore } from "../appStore";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Menu: React.FC = () => {
  const location = useLocation();


  const currencies = currencyStore.useState();

  const handleCurrencyDelete = () => {
    currencies.pop();
  }

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
                  <IonButton expand="block" fill="clear" onClick={handleCurrencyDelete}>
                  <IonIcon icon={trash}></IonIcon>
                  </IonButton>
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
