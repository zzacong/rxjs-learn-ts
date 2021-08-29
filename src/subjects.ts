import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs'

import { addItem } from './utils'
import './style.css'

/**
 * Subject
 */

// const subject = new Subject()

// subject.subscribe({
//   next: data => addItem(`Observer 1: ${data}`),
//   error: error => addItem(error),
//   complete: () => addItem('Observer 1 completed'),
// })

// subject.next('The first thing has been sent')

// const observer2 = subject.subscribe(data => addItem(`Observer 2: ${data}`))

// subject.next('The second thing has been sent')
// subject.next('The third thing has been sent')

// observer2.unsubscribe()

// subject.next('A final thing has been sent')

/**
 * BehaviorSubject
 */

// const behavior = new BehaviorSubject('First')

// behavior.subscribe({
//   next: data => addItem(`Observer 1: ${data}`),
//   error: error => addItem(error),
//   complete: () => addItem('Observer 1 completed'),
// })

// behavior.next('The first thing has been sent')
// behavior.next('...Observer 2 is about to subscribe')

// const observer2 = behavior.subscribe(data => addItem(`Observer 2: ${data}`))

// behavior.next('The second thing has been sent')
// behavior.next('The third thing has been sent')

// observer2.unsubscribe()

// behavior.next('A final thing has been sent')

/**
 * Replay Subject
 */

// // const replay = new ReplaySubject(2)
// // const replay = new ReplaySubject(30, 200)
// const replay = new ReplaySubject(30, 500)

// replay.subscribe({
//   next: data => addItem(`Observer 1: ${data}`),
//   error: error => addItem(error),
//   complete: () => addItem('Observer 1 completed'),
// })

// // const observer2 = replay.subscribe(data => addItem(`Observer 2: ${data}`))

// // replay.next('The second thing has been sent')
// // replay.next('The third thing has been sent')

// // observer2.unsubscribe()

// // replay.next('A final thing has been sent')

// let i = 1
// setInterval(() => replay.next(i++), 100)

// setTimeout(() => {
//   const observer2 = replay.subscribe(data => addItem(`Observer 2: ${data}`))
// }, 500)

/**
 * Async Subject
 * only get sent when 'complete()' os called
 */

// const asyncSub = new AsyncSubject()

// asyncSub.subscribe({
//   next: data => addItem(`Observer 1: ${data}`),
//   error: error => addItem(error),
// })

// let i = 1
// setInterval(() => asyncSub.next(i++), 100)

// setTimeout(() => {
//   const observer2 = asyncSub.subscribe(data => addItem(`Observer 2: ${data}`))
//   asyncSub.complete()
// }, 500)
