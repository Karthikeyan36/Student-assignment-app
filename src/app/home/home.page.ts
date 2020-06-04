import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  username:string;
  password:string;
  
  constructor(private router:Router) {} 
login(){
  console.log("Username:"+ this.username);
  console.log("Password:"+this.password)
}  
Register(){
  this.router.navigate(['register']);
}
}
