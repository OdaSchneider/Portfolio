import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  @ViewChild('sendButton') sendButton!: ElementRef;

  contactForm: FormGroup;
  submit: boolean = false;
  report: string = '';
  url: string = 'https://oda-schneider.com/send_mail/sendMail.php';


  constructor(private http: HttpClient) {

  }


  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }


  onSubmit(myForm: any) {
    this.sendButton.nativeElement.disabled = true;
    this.http
      .post(this.url, myForm.value)
      .subscribe(
        response => this.response(response, myForm),
        error => this.error(error, myForm)
      );
  }


  response(response, myForm) {
    console.log(response);
    this.submit = true;
    this.report = 'Message send successfully';
    myForm.reset();
  }


  error(error, myForm) {
    console.log(error);
    this.submit = true;
    this.report = 'Unfortunately, there seems to be a problem. Please try the direct email link above for contact';
    myForm.reset();
  }


  closePopup() {
    this.submit = false;
    this.report = '';
    this.sendButton.nativeElement.disabled = false;
  }

}
