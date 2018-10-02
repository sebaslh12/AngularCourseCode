import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptionForm:any = {};
  submitted:boolean = false;
  subscription: string ="advanced";
  onSubmit(form:NgForm){
    this.submitted = true;
    this.subscriptionForm.email = form.value.email;
    this.subscriptionForm.subscription = form.value.subscriptions;
    this.subscriptionForm.password = form.value.pwd;
  }
}
