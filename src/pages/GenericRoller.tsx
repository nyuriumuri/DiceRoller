import { IonContent, IonHeader, IonPage, IonItem, IonInput, IonTitle, IonToolbar, IonButton, IonGrid, IonSelect, IonSelectOption, IonIcon, IonButtons,IonRow, IonCol, IonCheckbox, IonLabel } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import {rollDice} from '../functions/rollDice';
import './GenericRoller.css';
import React, { useState } from 'react';

const GenericRoller: React.FC = () => {
	const [dice, setDice] = useState<number[]>([]);
	const [num, setNum] = useState(3);
	const [max, setMax] = useState(6);
	const [evens, setEvens] = useState(0);
	const [successes, setSuccesses] = useState(0);
	const [success_operator, setSuccOp] = useState('>');
	const [success_val, setSuccVal] = useState<number>(3);
	const[mode, setMode] = useState("Sum");
	const [sum, setSum] = useState(0);
	const [explosive, setExplosive] = useState(false);
	const rollClickHandler = () =>{
		let arr=rollDice(num,max, explosive);
		setDice(arr);
		let s=0;
		let e=0;
		let c=0;
		for (let v of arr){
			s+=v;
			if(v%2==0) e++;
			if(mode=="Successes")
			{
				if( (success_operator=='>' && v> success_val) || (success_operator=='=' && v== success_val) || (success_operator=='<' && v< success_val) ) c++;
			}
		}
		setEvens(e);
		setSum(s);
		setSuccesses(c);
	};
  return (
    <IonPage>
      <IonContent fullscreen>
			<IonGrid fixed={true} className="RollToolBar">
				<IonRow>
					<IonCol size="auto">
					<IonItem className="RollInput">
					    <IonInput type="number" value={num} placeholder="3" onIonChange={e => { if(parseInt(e.detail.value!, 10)>0) setNum(parseInt(e.detail.value!, 10))}}></IonInput>
					 </IonItem>
					 </IonCol>
					<IonCol size="auto">
					<IonItem className="RollInput">
					  d <IonInput type="number" value={max} placeholder="3" onIonChange={e => { if(parseInt(e.detail.value!, 10)>0) setMax(parseInt(e.detail.value!, 10))}}></IonInput>
					</IonItem></IonCol>
					<IonCol size="auto">
						<IonItem className="RollInput">
							<IonLabel position="fixed"> Explosive </IonLabel>
							<IonCheckbox id="Explosive" checked={explosive} onIonChange={e=> setExplosive(e.detail.checked)}></IonCheckbox>
						</IonItem>
					</IonCol>
					<IonCol size="auto">
						<IonItem className="RollInput">
						<IonSelect value={mode} onIonChange={e => setMode(e.detail.value)}>
						<IonSelectOption value="Sum">Sum</IonSelectOption>
						<IonSelectOption value="Evens">Evens</IonSelectOption>
						<IonSelectOption value="Successes">Successes</IonSelectOption>
						 </IonSelect>
						</IonItem>
					</IonCol>
					{mode=="Successes" && <IonCol>
						<IonItem className="RollInput">
						<IonSelect value={success_operator} onIonChange={e => setSuccOp(e.detail.value)}>
						<IonSelectOption value='>'>{'>'}</IonSelectOption>
						<IonSelectOption value='<'>{'<'}</IonSelectOption>
						<IonSelectOption value='='>=</IonSelectOption>
						 </IonSelect>
						</IonItem>
					</IonCol>
				 	}
					{mode=="Successes" && <IonCol>
						<IonItem className="RollInput">
					    	<IonInput type="number" value={success_val} placeholder="3" onIonChange={e => setSuccVal(parseInt(e.detail.value!, 10))}></IonInput>
					 	</IonItem>
					 </IonCol>}
					<IonCol>
					<IonButton id="RollButton" expand="block" onClick ={()=>{rollClickHandler()}}> Roll </IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>

				<IonGrid className="DiceWindow">
					<IonRow>
						{dice.map((val,i)=>{
							return <IonCol size="auto" className="DiceCol"> <div className="DiceIcon">{val}</div></IonCol>
						})}
					</IonRow>
				</IonGrid>

		{mode=="Sum" && <IonItem className="Result"><IonLabel>{sum} </IonLabel></IonItem>}
		{mode=="Evens" && <IonItem className="Result"><IonLabel>{evens} </IonLabel></IonItem>}
		{mode=="Successes" && <IonItem className="Result"><IonLabel>{successes} </IonLabel></IonItem>}
      </IonContent>
    </IonPage>
  );
};

export default GenericRoller;
