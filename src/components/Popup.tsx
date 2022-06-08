import { FormEvent, useState } from "react";
import { IonButton, IonIcon, IonInput, IonItem, IonLabel } from "@ionic/react";
import { add, addOutline, cashOutline, trash } from "ionicons/icons";

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
      togglePopUp();
    } else {
      alert(
        "Cannot create new currency: You need to provide three-letter currency code"
      );
    }

    event.preventDefault();
  };

  return (
    <>
      {popup && (
        <div>
          {/* <div onClick={togglePopUp} className="overlay"></div> */}
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel>
                <IonIcon slot="start" icon={cashOutline} />
              </IonLabel>
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
              <IonButton type="submit">
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonItem>
          </form>
        </div>
      )}

      <IonButton expand="block" fill="clear" onClick={togglePopUp}>
        Add another currency
      </IonButton>
    </>
  );
};

export default Popup;
