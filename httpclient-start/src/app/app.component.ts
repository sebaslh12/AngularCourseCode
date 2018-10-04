import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfajQUvRJUxtgUoTkkjKCalFCxD_uHZdM",
      authDomain: "ng-recipe-book-f1fdb.firebaseapp.com"
    });
  }

}
