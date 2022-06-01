import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  success() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      complete: () => console.log('Done!'),
      error: (error) => console.log(error)
    });
  }

  error() {
    this.http.get('https://jsonplaceholder.typicode.com/todosssss').subscribe({
      complete: () => console.log('Done!'),
      error: (error) => console.log(error)
    });
  }
}
