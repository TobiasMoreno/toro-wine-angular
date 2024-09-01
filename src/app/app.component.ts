import { Component } from '@angular/core';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SobreNosotrosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
}
