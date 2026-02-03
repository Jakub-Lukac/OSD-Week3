import { Component, inject, signal } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from "./child2/child2.component";
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  imports: [Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counterService = inject(CounterService);
  constructor() {}
  
  // Access the signals directly
  count = this.counterService.count;
  doubleCount = this.counterService.doubleCount;
  
  increment() {
    this.counterService.increment();
  }
  
  decrement() {
    this.counterService.decrement();
  }
}