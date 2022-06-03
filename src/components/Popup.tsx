import "./Popup.css";

import { FormEvent, useState } from "react";
import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";

import { CurrencyPage } from "../appStore";

interface PopupProps {
  currencies: CurrencyPage[];
}

const Popup: React.FC<PopupProps> = ({ currencies }) => {
  const [popup, setPopup] = useState(false);

  const togglePopUp = () => {
    setPopup(!popup);
  };

  const [newCurrency, setNewCurrency] = useState<string | null>();

  console.log(newCurrency);

  const handleSubmit = (e: FormEvent): void => {
    try {
    } catch (e) {
      console.error(e);
    }
  };

  // const v = () => {
  //   currencyStore.update((s) => [...s, createCurrency("CHF")]);
  // };

  // const currencies = currencyStore.useState();
  // console.log(currencies);

  return (
    <>
      <IonButton expand="block" fill="clear" onClick={togglePopUp}>
        Add another currency
      </IonButton>

      {popup && (
        <div className="popup">
          {/* <div onClick={togglePopUp} className="overlay"></div> */}
          <div className="popup-content">
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonLabel>Currency:</IonLabel>
                <IonInput
                  name="newCurrency"
                  value={newCurrency}
                  onIonChange={(e) => {
                    // Move following to `onSubmit` event
                    // TODO: Prevent from reloading a page and adding a
                    //       query parameters to the URL
                    setNewCurrency(e?.detail["value"]);
                  }}
                  required={true}
                  placeholder="three-letter code"
                  autoCapitalize="on"
                />
              </IonItem>
              <input type="submit" />
            </form>
            <button className="close-popup" onClick={togglePopUp}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
