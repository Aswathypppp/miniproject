import { Injectable } from '@angular/core';
import { data } from 'src/assets/data/data';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc,collection,Firestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DocumentReference,getFirestore } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
userid:any;
db:any =getFirestore()

  constructor(private router:Router,private auth:Auth,private firestore:Firestore) { }



  getData()
  {
      return data
  }
insertData(docRef:any,data:any){
  addDoc(docRef,data)
  .then(()=>{alert("sucessfull")})
  .catch((err)=> alert(err))
}


  }

