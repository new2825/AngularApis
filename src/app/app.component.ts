import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyJob';
  items: any[] = [
    { label: 'inicio', icon: 'pi pi-home'},
    { label: 'quienes somon', icon: 'pi pi-home'},
    { label: 'contacto', icon: 'pi pi-home'},
    { label: 'login', icon: 'pi pi-home'},
  ];
}
