import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  prjStatus = ['Stable', 'Critical', 'Finished'];
  ngOnInit() {
    this.projectForm = new FormGroup({
      'prjName': new FormControl(null, [Validators.required, this.syncForbiddenPrjName], this.asyncForbiddenPrjName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  syncForbiddenPrjName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test')
      return { 'forbiddenName': true };
    return null;
  }

  asyncForbiddenPrjName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test1')
          resolve({ 'forbiddenName': true });
        resolve(null);
      }, 100)
    });
    return promise;
  }
}
