import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";
import "./Popup.css"

export default function Popup() {
  const [Popup, setPopup] = useState(false);
  const [currency,setCurrency] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    alert(currency)
  }
 

  const togglePopUp = () => {
    setPopup(!Popup);
  };

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          
        <IonFabButton className="addbtn" onClick={togglePopUp} >
        <IonIcon icon={add} />
        </IonFabButton>

      </IonFab>

      {Popup && (
        <div className="popup">
          <div onClick={togglePopUp} className="overlay"></div>
          <div className="popup-content">
            <h2>Jaką walutę chcesz dodać?</h2>
            <form onSubmit={handleSubmit}>
                    <input
                    type="text" 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    />
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
}