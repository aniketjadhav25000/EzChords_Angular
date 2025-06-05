import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@ezchords.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '💬',
      title: 'Discord',
      value: 'EzChords Community',
      description: 'Join our learning community'
    },
    {
      icon: '📱',
      title: 'Social Media',
      value: '@EzChordsApp',
      description: 'Follow us for updates'
    }
  ];

  faqs = [
    {
      question: 'How do I get started as a complete beginner?',
      answer: 'Start with our Beginner Lessons section. We recommend learning your first chord (Em) and then gradually adding more chords to your repertoire.'
    },
    {
      question: 'Do I need a special guitar to use EzChords?',
      answer: 'No! Any acoustic or electric guitar will work. We recommend starting with an acoustic guitar as it\'s more portable and doesn\'t require additional equipment.'
    },
    {
      question: 'How long does it take to learn a song?',
      answer: 'It varies by difficulty and your experience level. Most beginners can play simple songs within 2-4 weeks of consistent practice.'
    },
    {
      question: 'Are the chord diagrams accurate?',
      answer: 'Yes! All our chord diagrams are verified by professional guitarists and regularly updated for accuracy.'
    }
  ];

  onSubmit() {
    if (this.isValidForm()) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.resetForm();
      }, 2000);
    }
  }

  private isValidForm(): boolean {
    return !!(this.contactForm.name && 
              this.contactForm.email && 
              this.contactForm.subject && 
              this.contactForm.message);
  }

  private resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  resetSubmissionState() {
    this.isSubmitted = false;
  }
}
