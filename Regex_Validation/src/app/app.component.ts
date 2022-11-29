import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })

  }
  
  get msg(){
    return this.myForm.controls;
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

}
