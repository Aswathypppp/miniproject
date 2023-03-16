import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data/data';
@Component({
  selector: 'app-homebooking',
  templateUrl: './homebooking.component.html',
  styleUrls: ['./homebooking.component.css']
})
export class HomebookingComponent {
constructor(private router:Router,private hero:HeroService){}
data=this.hero.getData();

gotoHere(id:any){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}



}



