
import React from 'react';

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
