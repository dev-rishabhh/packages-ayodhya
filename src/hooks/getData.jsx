
import React, { useEffect, useState } from 'react'

import { db } from '..firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

export const fetchData = (name) => {
    const [Data, setData] = useState()

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, `${name}`));
            const Snap = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(Snap)
        } catch (error) {
            // console.log(error);
        }
    }
useEffect(() => {
        getData();
    }, [])
        return Data
}