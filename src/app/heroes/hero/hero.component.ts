import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string='ironman';
  public age: number =28;

  get capitalizedNames():string{
    return this.name.toUpperCase();
  }

  getHerDescription():string {
    return`${ this.name } - ${this.age}`;
  }

  changeHero():void {
    this.name='Spiderman';



  }

  changeAge():void {
    this.age=89;

  }
  resetForm():void{
    //this.name='ironman'
    this.age=28
    document.querySelectorAll('h1')!.forEach(element=> {
      element.innerHTML ='<h1>Desde ANGULAR</h1>';


    });
  }

}
