import "./HomePage.css";

import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useParams } from "react-router";

const HomePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow>
          <IonCol>
            <img src="../assets/banner.png"></img>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>

          </IonCol>
          <IonCol>
            <h2>How to use app?</h2>
            <p>On the left site you have menu that give you possibility to check ask and bid values of every single currencies which is available on
              NBP </p>
            <h3>Example currencies</h3>
            <img src="../assets/currencies.png"></img>
          </IonCol>
          <IonCol></IonCol>
        </IonRow>
          
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
