import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count:WritableSignal<number> = signal(0); // writable signal
  
  doubleCount:Signal<number> = computed(() => {
    console.log('Calculating doubleCount:', this.count() * 2);
    return this.count() * 2;
  }); // computed signal -> readonly

  increment() {
    this.count.update(value => value + 1);
    console.log('Count after increment:', this.count());
  }

  decrement() {
    this.count.update(value => value > 0 ? value - 1 : 0);
    console.log('Count after decrement:', this.count());
  }

  getCount() {
    console.log('Getting count:', this.count());
    return this.count();
  }
}
