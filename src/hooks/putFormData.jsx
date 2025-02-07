import React from 'react'
    
    
import { db } from '../firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

export const putFormData=(name,Data)=>{
    const getData = () => {
      const collectionRef = collection(db,`${name}`);
        try {
          addDoc(collectionRef, Data);
          // console.log('added doc',Data.name);

        } catch (e) {
          // console.log(e);
        }

    };
    getData();
}