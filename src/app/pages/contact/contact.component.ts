import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // ✅ Include CommonModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  sending = false;
  successMsg = '';
  errorMsg = '';

  constructor(private http: HttpClient) {}

  sendEmail() {
    if (!this.name || !this.email || !this.message) {
      this.errorMsg = 'Please fill all the fields.';
      this.successMsg = '';
      return;
    }

    this.sending = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.http.post('http://localhost:3000/send-email', {
      name: this.name,
      email: this.email,
      message: this.message,
    }).subscribe({
      next: (res: any) => {
        this.sending = false;
        this.successMsg = res.message || 'Message sent successfully!';
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        this.sending = false;
        this.errorMsg = err.error?.error || 'Failed to send message.';
      }
    });
  }
}
