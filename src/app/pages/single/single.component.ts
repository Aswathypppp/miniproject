import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
constructor(private hero:HeroService){}
ngOnInit():void{
  let id=localStorage.getItem('id')
  let dataset=this.hero.getData()
  this.single=dataset.filter(e=>e.name===id)
  console.log(this.single)
}
}
