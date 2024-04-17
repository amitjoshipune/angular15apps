import { Component, OnInit } from '@angular/core';
import { combineLatest, debounceTime, delay, from, fromEvent, interval, map, mergeMap, of, pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
/**
 *
 */
constructor() {
   console.log(`Test1Component ctor called.`);
     
}

dummyApi = (character :  string) => { // fake api call function
  return of(`API response for character: ${character}`).pipe(
    delay(1000) // the fake api takes 1 second
  );
}


  ngOnInit(): void {
    console.log('Test1Component ngOnInit called');


    //inputtextbox
    const inputEl = document.getElementById('inputtextbox')!;
    
    fromEvent(inputEl, 'keyup').pipe(
      debounceTime(300)
    ).subscribe(() => console.log('Input debounced'));

 
    const button = document.getElementById('btnClickMe')!;

    fromEvent(button, 'click').pipe(
      switchMap(() => interval(1000))
    ).subscribe(value => console.log(value)); 


/*
    const source1$ = interval(1000);
const source2$ = interval(2000);

combineLatest(source1$, source2$).subscribe(([value1, value2]) => {
  console.log(`Source 1 value: ${value1}, Source 2 value: ${value2}`);
});
*/

const source1$ = from([10,20,30,40,50,60,70,80,90]);
const source2$ = from([2000,1000,3000,4000,5000]);
const source3$ = from(['Pune', 'Dapoli', 'Ratnagiri','Dhayari']);
const source4$ = from([{id:101, name:'amit'},{id:102, name:'anand'},{id:103, name:'mahesh'},{id:104, name:'joshi'}]);

combineLatest(source1$, source2$, source3$ ,source4$).subscribe(([value1, value2,value3,value4]) => {
  console.log(`Source 1 value: ${value1}, Source 2 value: ${value2},  Source 3 value: ${JSON.stringify(value3)} , Source 4 value: ${JSON.stringify(value4)}`);
});

    from(["Calcifer", "Alchemist", "X-Men", "Link"]) // characters I need to get information for
    .pipe(
      map((arr: any) => this.dummyApi(arr)) // generates 4 new Observables
    ).subscribe( // subscribing Observable (outer) of 4 Observables (inner)
      data => {
        data.subscribe(i => {console.log(i)});
      }// subscribing to inner Observables
    );

    from(["Calcifer", "Alchemist", "X-Men", "Link"])
      .pipe(
        mergeMap(arr => this.dummyApi(arr)) // gets 4 Observable as API response and merges them
        
      ).subscribe( // we subscribe to one mapped and merged Observable
        data => console.log('--->',data)
      )


      const source$ = from([
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 }
      ]);
      /* This example of pluck rxjs operator */
      source$.pipe(
        pluck('name')
      ).subscribe((obj) => console.log(obj)); // Output: John, Alice, Bob
  }

}

