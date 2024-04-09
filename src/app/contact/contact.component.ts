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

  protected contactForm: FormGroup;
  protected submit: boolean = false;
  protected report: string = '';
  private api: string = 'https://mailthis.to/oda.schneider@gmx.de';


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
      .post(this.api, myForm.value)
      .subscribe({
        next: (response) => this.response(response, myForm),
        error: (e) => this.error(e, myForm),
        complete: () => console.log('complete'),
    })
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
