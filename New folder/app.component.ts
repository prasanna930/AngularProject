import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:
  './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sri';
  public name="krishna";
  parentEvent(){
    alert('method claed');
  }
}
