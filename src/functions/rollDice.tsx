import { IonGrid, IonRow, IonCol } from '@ionic/react';
export function rollDice(num = 4, max = 6, explode=false): number[] {
		let arr=[];
		for (let i=0; i<num; i++)
		{	let x = Math.floor(Math.random() * (max ) + 1)
			arr.push(x);
			if(explode&&x>=max) i--;
		}
		return arr;

}
