import './Accordeon.css';
import React from 'react';
import { 
  IonAccordion, 
  IonAccordionGroup,
  IonItem, 
  IonLabel,
  IonCheckbox,
} from '@ionic/react';

//import './main.css';

function Accordeon(props:any) {

     const Ingredient = props.Tutuingredient

  return (
    <IonAccordionGroup expand="inset">
      <IonAccordion value="first">
        <IonItem slot="header" color="rose">
          <IonLabel>Choix Viande</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"viande")}  title="Cheval" slot="start"></IonCheckbox>
                 <IonLabel>Cheval</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"viande")}  title="Beef" slot="start"></IonCheckbox>
                 <IonLabel>Beef Boulette</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"viande")}  title="Chicken" slot="start"></IonCheckbox>
                 <IonLabel>Chicken</IonLabel>                 
            </IonItem>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="rose">
          <IonLabel>Choix Legumes</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"legumes")}  title="Poivrons" slot="start"></IonCheckbox>
                 <IonLabel>Poivrons</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"legumes")}  title="Champignons" slot="start"></IonCheckbox>
                 <IonLabel>Champignons</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"legumes")}  title="Dulce" slot="start"></IonCheckbox>
                 <IonLabel>Dulce</IonLabel>                 
            </IonItem>
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="rose">
          <IonLabel>Choix Poisson</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"pescado")}  title="Huitres" slot="start"></IonCheckbox>
                 <IonLabel>Huitres</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"pescado")}  title="Saumon" slot="start"></IonCheckbox>
                 <IonLabel>Saumon</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"pescado")}  title="Haddock Fumé" slot="start"></IonCheckbox>
                 <IonLabel>Haddock Fumé</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"pescado")}  title="Anchois" slot="start"></IonCheckbox>
                 <IonLabel>Anchois</IonLabel>                 
            </IonItem>
        </div>
      </IonAccordion>
      <IonAccordion value="fourth">
        <IonItem slot="header" color="rose">
          <IonLabel>Choix Topping</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"topping")}  title="Burrata" slot="start"></IonCheckbox>
                 <IonLabel>Burrata</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"topping")}  title="Capres" slot="start"></IonCheckbox>
                 <IonLabel>Capres</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"topping")}  title="Olives" slot="start"></IonCheckbox>
                 <IonLabel>Olives</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"topping")}  title="Extra Parmesan" slot="start"></IonCheckbox>
                 <IonLabel>Extra Parmesan</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"topping")}  title="Piment" slot="start"></IonCheckbox>
                 <IonLabel>Piment</IonLabel>                 
            </IonItem>
            <IonItem>
                 <IonCheckbox onClick={( {target} ) => Ingredient(target,"topping")}  title="Sauce BarbeCul" slot="start"></IonCheckbox>
                 <IonLabel>Sauce BarbeCul</IonLabel>                 
            </IonItem>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Accordeon;
