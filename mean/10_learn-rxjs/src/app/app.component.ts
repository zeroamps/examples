import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { finalize, take, takeLast, takeUntil, takeWhile } from 'rxjs/operators';
import { from, interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  subscription: Subscription;
  notifier = new Subject();

  constructor(private httpClient: HttpClient) {}

  finalize() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(finalize(() => console.log('finalize')))
      .subscribe((data) => console.log(data));
  }

  promise() {
    const promise = fetch('https://jsonplaceholder.typicode.com/todos');
    from(promise).subscribe((response) => console.log(response));
  }

  interval() {
    this.subscription = interval(1000)
      .pipe(finalize(() => console.log('finalize interval 1')))
      .subscribe((value) => console.log(`interval 1 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 2')),
        take(3)
      )
      .subscribe((value) => console.log(`interval 2 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 3')),
        takeUntil(this.notifier)
      )
      .subscribe((value) => console.log(`interval 3 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 4')),
        takeWhile((value) => value < 5)
      )
      .subscribe((value) => console.log(`interval 4 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 5')),
        takeUntil(this.notifier),
        takeLast(3)
      )
      .subscribe((value) => console.log(`interval 5 = ${value}`));
  }

  destroy() {
    console.log(this.subscription);
    this.subscription.unsubscribe();
    console.log(this.subscription);
    this.notifier.next(null);
  }
}
