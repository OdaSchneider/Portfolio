import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{

  contactForm: FormGroup;
  formStatus;

  ngOnInit(){
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });

    this.contactForm.statusChanges.subscribe((value) => {
      this.formStatus = value;
    })
  }

  onSubmit(){
    console.log(this.contactForm);
  }


}
