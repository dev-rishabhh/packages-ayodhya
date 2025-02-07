    
    import React from 'react'
    
    
import { db } from '../firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

export const putData=(name,Data)=>{
    const getData = () => {
      const collectionRef = collection(db,`${name}`);
      Data.forEach(async (data) => {
        try {
          await addDoc(collectionRef, data);
          // console.log('added doc',data.name);

        } catch (e) {
          // console.log(e);
        }
      })
    };
    getData();
}