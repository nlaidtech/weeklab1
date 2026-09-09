import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import {
collection,
addDoc,
onSnapshot,
doc,
updateDoc,
deleteDoc,
} from 'firebase/firestore';