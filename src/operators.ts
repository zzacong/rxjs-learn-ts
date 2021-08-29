import { from, interval, merge, Observable, Subject } from 'rxjs'
import { map, pluck, skipUntil } from 'rxjs/operators'

import { addItem } from './utils'
import './style.css'

/**
 * merge operator
 */
// const observable = new Observable(observer => {
//   observer.next('Hi guys!')
// })

// const observable2 = new Observable(observer => {
//   observer.next('How is it going?')
// })

// const newObs = merge(observable, observable2)

// newObs.subscribe(x => addItem(x))

/**
 * map operator
 */
// new Observable<string>(observer => {
//   observer.next('Hi guys!')
// })
//   .pipe(map(val => val.toUpperCase()))
//   .subscribe(x => addItem(x))

/**
 * pluck operator
 */
// from([
//   { first: 'Gary', last: 'Simon', age: '34' },
//   { first: 'Jane', last: 'Simon', age: '34' },
//   { first: 'John', last: 'Simon', age: '34' },
// ])
//   .pipe(pluck('first'))
//   .subscribe(x => addItem(x))

/**
 * skipUntil operator
 */

const observable1 = interval(1000)
const observable2 = new Subject()

setTimeout(() => {
  observable2.next('Hey!')
}, 3000)

const newObs = observable1.pipe(skipUntil(observable2))

newObs.subscribe(x => addItem(x))
