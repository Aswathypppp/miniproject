import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent {


   name : string ='' ;
   email : string ='';
   phone: string ='';
   currentaddress : string ='';
   noofpersons : string ='';
   noofperiod : string ='';
   message : string ='';

 constructor(private router:Router,private firestore:Firestore){}
 
  addData(f:any)
   {
    if(this.name == ''){
      alert('please enter name')
      return;
    }
    if(this.email == ''){
      alert('please enter email')
      return;
    }
    if(this.phone == ''){
      alert('please enter number')
      return;
    }
    if(this.currentaddress == ''){
      alert('please enter current address')
      return;
    }
    if(this.noofpersons == ''){
      alert('please enter noofpersons')
      return;
    }
    if(this.noofperiod == ''){
      alert('please enter noofperiod')
      return;
    }
    if(this.message == ''){
      alert('please enter message')
      return;
    }
    const collectionInstance =collection(this.firestore,'userbooking');
   addDoc(collectionInstance,f.value).then(() =>{
     console.log('data saved successfully')
     alert('Booked successful');
     this.router.navigate(['']);
   })
   .catch((err)=>{
  console.log(err);
   })
 }

}




