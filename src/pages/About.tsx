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

const About: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const url = `https://api.nbp.pl/api/exchangerates/tables/C/`;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />	&larr; click here
          </IonButtons>
          <IonButton href="#" color="light" slot="end">Back</IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <div className="containerr">
      <h1>
          Jesteśmy Koksami 
      </h1>
    </div>
    <div className="containerrr">
    <IonButton href="/About" color="light" slot="end">About</IonButton>   
    </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
