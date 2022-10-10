import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import './BasePizza.css';

function BasePizza(props:any) {

  const RecupButton=props.Tutubut
  

  return (
    <>
      <IonSegment value="default">
        <IonSegmentButton onClick={( detail ) => RecupButton(detail)} class="tomato" title="Tomate">
          <IonLabel id="basetomate">Base Tomate</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton onClick={( detail ) => RecupButton(detail)} class="bianca" title="Blanche">
          <IonLabel>Base Blanche</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default BasePizza;