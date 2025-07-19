import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing-module';
import { Notes } from './notes/notes';
import { About } from './about/about';
import { HeaderNavigations } from './header-navigations/header-navigations';

@Component({
  selector: 'app-root',
  imports: [
    AppRoutingModule,
    HeaderNavigations,
    RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('routingAndNavigation');
}
