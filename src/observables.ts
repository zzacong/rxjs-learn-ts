import { fromEvent, Observable } from 'rxjs'
import { share } from 'rxjs/operators'

import { addItem } from './utils'
import './style.css'

const observable = new Observable(observer => {
  try {
    observer.next('hey guys!')
    observer.next('how are you?')
    setInterval(() => {
      observer.next('I am good')
    }, 2000)
    // observer.complete()
    // observer.next('this will not send')
  } catch (error) {
    observer.error(error)
  }
})

const observer = observable.subscribe({
  next: x => addItem(x),
  error: error => addItem(error),
  complete: () => addItem('completed'),
})

const observer2 = observable.subscribe(x => addItem(x))

observer.add(observer2)

setTimeout(() => {
  observer.unsubscribe()
}, 6001)

/**
 * Hot observable
 */

// const observable = new Observable(observer => {
//   try {
//     observer.next('hey guys!')
//     observer.next('how are you?')
//     setInterval(() => {
//       observer.next('I am good')
//     }, 2000)
//     // observer.complete()
//     // observer.next('this will not send')
//   } catch (error) {
//     observer.error(error)
//   }
// }).pipe(share())

// setTimeout(() => {
//   const observer2 = observable.subscribe(x => addItem(`Subcriber 2: ${x}`))
// }, 1000)

// const observable2 = fromEvent(document, 'click')

// setTimeout(() => {
//   const subscription = observable2.subscribe(x => addItem(x))
// }, 2000)
