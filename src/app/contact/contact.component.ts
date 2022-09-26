import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('message') message: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  contactForm: FormGroup;
  // formStatus: string;

  ngOnInit(){
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });

    // this.contactForm.statusChanges.subscribe((value) => {
    //   this.formStatus = value;
    // })
  }

  async onSubmit(){
    let name =  this.name.nativeElement;
    let email = this.email.nativeElement;
    let message = this.message.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableElements(name, email, message, sendButton);
    await this.sendMail(name, email, message);
    this.enableElements(name, email, message, sendButton);
  }


  disableElements(name, email, message, sendButton){
    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    sendButton.disabled = true;
  }


  async sendMail(name, email, message){
    let formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('message', message.value);
    await fetch('https://oda-schneider.com/send_mail/send_mail.php',
    {
      method: 'POST',
      body: formData
    });
  }


  enableElements(name, email, message, sendButton){
    name.disabled = false;
    email.disabled = false;
    message.disabled = false;
    sendButton.disabled = false;
  }

}
