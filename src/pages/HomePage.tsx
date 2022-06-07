import "./HomePage.css";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useParams } from "react-router";

const HomePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />	&larr; click here
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <div className="containerr">
      <h1>
         <b> Welcome <br/>in the<br/>Current Currencies</b>
      </h1>
    </div>
    <div className="but1">
    <IonButton href="/about" color="light" slot="end" expand="block">Instruction</IonButton>   
    </div>
    <div className="but2">
    <IonButton href="/avacur" color="light" slot="end" expand="block">Available Currencies</IonButton>   
    </div>
    <div className="but3">
    <IonButton href="/about" color="light" slot="end" expand="block">Start</IonButton>   
    </div>
    <div className="containerrr">
    <IonButton href="/about" color="light" slot="end" expand="block">About</IonButton>   
    </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
