import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactWrapperComponent } from './react-wrapper.component';
import { GlobalNavbar } from './components/Navbar';
import { FloatingChatbot } from './components/Chatbot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactWrapperComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = signal('skillorbit-frontend');
  
  // React Component References
  NavbarComponent = GlobalNavbar;
  ChatbotComponent = FloatingChatbot;

  // Props
  navProps = { role: 'student' };
  chatProps = {};
}
