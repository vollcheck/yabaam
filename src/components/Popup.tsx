import "./Popup.css";

import { FormEvent, useState } from "react";
import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";

import { createCurrency } from "../utils";
import { currencyStore } from "../appStore";

const Popup = () => {
  const [popup, setPopup] = useState(false);

  const togglePopUp = () => {
    setPopup(!popup);
  };

  const [newCurrency, setNewCurrency] = useState<string | null>();

  const handleSubmit = (event: FormEvent) => {
    if (newCurrency && newCurrency.length == 3) {
      currencyStore.update((s) => [
        ...s,
        createCurrency(newCurrency.toUpperCase()),
      ]);
    } else {
      alert(
        "Cannot create new currency: You need to provide three-letter currency code"
      );
    }


    event.preventDefault();
  };

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
