import "./Menu.css";

import {
  CreateAnimation,
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
import { cashOutline, trash } from "ionicons/icons";
import { useRef, useState } from "react";

import Popup from "./Popup";
import { currencyStore } from "../appStore";
import { useLocation } from "react-router-dom";

const Menu: React.FC = () => {
  const location = useLocation();
  const currencies = currencyStore.useState();
  const [playAnimation, setPlayAnimation] = useState(false);

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
                  <CreateAnimation
                    duration={1500}
                    fromTo={{
                      property: "opacity",
                      fromValue: "1",
                      toValue: "0",
                    }}
                    play={playAnimation}
                  >
                    <IonIcon slot="start" icon={cashOutline} />
                    <IonLabel>{currencyPage.code}</IonLabel>
                    <IonButton
                      expand="block"
                      fill="clear"
                      onClick={() =>
                        currencyStore.update((s) => {
                          console.log(currencyStore);
                          return currencies.filter(
                            (c) => c.code !== currencyPage.code
                          );
                        })
                      }
                    >
                      <IonIcon icon={trash} />
                    </IonButton>
                  </CreateAnimation>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItemDivider />
          {/* onClick={togglePopUp} */}
        </IonList>
        <Popup />
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
