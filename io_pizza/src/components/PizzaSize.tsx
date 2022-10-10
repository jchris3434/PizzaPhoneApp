import { Icon } from '@iconify/react';
import './PizzaSize.css';

import React, { useState } from 'react';
import { IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';

const PizzaSize = (props:any) =>{
  
  const PizzaTaille = props.Tutusize
  const Loulou = props.Loulou
//  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>(20);
  

  return (
    <>
      <IonRange onIonChange={({ detail }) => PizzaTaille(detail.value)} min={20} max={60}></IonRange>
      
      <IonLabel id="pizzsize">Taille de Pizza souhaitée: {Loulou as number} cm</IonLabel>
    </>
  );
}
export default PizzaSize;