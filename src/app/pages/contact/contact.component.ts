import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';

import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data/data';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string='';
  email:string='';
  number:string='';
  message:string='';
  
  constructor(public hero:HeroService,private fire:Firestore ){}
  ngOnInit(){ 
  }


  onSubmit(){
    const da = {
      name:this.name,
      email:this.email,
      number:this.number,
      message:this.message,
    }
      const docRef = collection(this.fire,"contactdata")
this.hero.insertData(docRef,da)
this.name=''
this.email=''
this.number=''
this.message=''
    }
  }





