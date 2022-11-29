import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng22w48';
  contact = {
    firstName: 'Pierre',
    company: 'Dawan'
  }

  get pseudoProperty() {
    return 'retour de la fonction';
  }
}
