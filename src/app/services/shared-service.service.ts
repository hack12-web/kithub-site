import { Injectable } from '@angular/core';

import {
  addDoc,
  collection,
  Firestore
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private firestore: Firestore) { }

  public sendNewsLetters(val:any):void{
    const DbInstance = collection(this.firestore, 'newsLetters');
    addDoc(DbInstance, val).then(() =>{
      alert('Thank, you will the news soon as possible');
    }).catch((error) =>{
      alert('oups something want wrong !');
    });
  }


}
