import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Icon } from '@iconify/react';
import BasePizza from '../components/BasePizza';
import PizzaSize from '../components/PizzaSize';
import Accordeon from '../components/Accordeon';
import Valider from '../components/Commande';
import RecapContainer from '../components/Recap';
import React, { useState } from 'react';

const Home: React.FC = () => {


  const [data, setData] = useState<any>({
    base: null,
    size: 20,
    viande: [],
    legumes: [],
    pescado: [],
    topping: []
  });


  const RecupButton = (e: any) => {
    data.base = e.target.title;
    //console.log(data.base);    
  };

  const PizzaTaille = (size: any) => {
    data.size = size;
    //console.log(data.size);    
  };

  const Ingredient = (item: any, categorie: string) => {

    const casecheck = item.getAttribute("aria-checked")

    console.log(categorie)
    console.log(item)
    console.log(casecheck)

    if (categorie == "viande") {
      if (casecheck == "false") {
        data.viande.push(item.title);
      } else { console.log('supprimé') }
    }

    if (categorie == "legumes") {
      if (casecheck == "false") {
        data.legumes.push(item.title);
      } else { console.log('supprimé') }
    }

    if (categorie == "pescado") {
      if (casecheck == "false") {
        data.pescado.push(item.title);
      } else { console.log('supprimé') }
    }

    if (categorie == "topping") {
      if (casecheck == "false") {
        data.topping.push(item.title);
      } else { console.log('supprimé') }
    }

    console.log(data);

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizza Shop <Icon icon="ion:pizza" /></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <BasePizza Tutubut={RecupButton} />
        <PizzaSize Tutusize={PizzaTaille} Loulou={data.size} />
        <Accordeon Tutuingredient={Ingredient} />
        <Valider />
        <RecapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
