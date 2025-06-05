import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-ai',
  templateUrl: './chat-ai.component.html',
})
export class ChatAiComponent {
  chat: { sender: string; message: string }[] = [];
  userInput = '';
  loading = false;

  constructor(private http: HttpClient) {}

  askQuestion() {
    if (!this.userInput.trim()) return;

    this.chat.push({ sender: 'user', message: this.userInput });
    const question = this.userInput;
    this.userInput = '';
    this.loading = true;

    this.http.post<any>('http://localhost:3000/ask', { question }).subscribe(
      (res) => {
        this.chat.push({ sender: 'bot', message: res.reply });
        this.loading = false;
      },
      (err) => {
        this.chat.push({ sender: 'bot', message: 'Error fetching response.' });
        this.loading = false;
      }
    );
  }
}
