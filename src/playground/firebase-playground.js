import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDHSAwi2ymUNfYNjJrKBBTQ5g6n55p9yaw",
    authDomain: "expensify-ede3b.firebaseapp.com",
    databaseURL: "https://expensify-ede3b.firebaseio.com",
    projectId: "expensify-ede3b",
    storageBucket: "expensify-ede3b.appspot.com",
    messagingSenderId: "1063394216540"
};
firebase.initializeApp(config);

const database = firebase.database();


// // child_removed
// database.ref('expenses').on('child_removed', (data) => {
//     console.log(data.key, data.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (data) => {
//     console.log(data.key, data.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (data) => {
//     console.log('child added:', data.key, data.val());
// })

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'Car Wash',
//         note: '',
//         amount: 300,
//         createdAt: 0
//     });
// }, 3500);



// const onValueChange = database.ref('expenses').on('value', (data) => {
//     const expenses = [];
//     data.forEach((childData) => {
//         expenses.push({
//             id: childData.key,
//             ...childData.val()
//         })
//     })
//     console.log(expenses)
// })



// database.ref('expenses')
//     .once('value')
//     .then((data) => {
//         const expenses = [];
//         data.forEach((childData) => {
//             expenses.push({
//                 id: childData.key,
//                 ...childData.val()
//             })
//         })
//         console.log(expenses)
//     });


// database.ref('expenses').push({
//     description: 'Car Wash',
//     note: '',
//     amount: 300,
//     createdAt: 0
// })

// database.ref('notes/-L3ZoMYO9rFvUgHRrptH').remove()
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// const onValueChange = database.ref().on('value', (data) => {
//     const val = data.val();
//     console.log(`${val.name} is a ${val.age} year old ${val.job.title} at ${val.job.company}`)
// }, (err) => {
//     console.log('Error with data fetching', err);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 3500 * 2);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
//     console.log('no longer subscribing to changes')
// }, 3500 * 3)

// setTimeout(() => {
//     database.ref('age').set(27);
// }, 3500 * 4);

// database.ref().once('value').then((data) => {
//     const val = data.val();
//     console.log(val)
// }).catch((err) => {
//     console.log('Error fetching data', err)
// })


// database.ref().set({
//     name: 'Nick Trabue',
//     age: 27,
//     job: {
//         title: 'Web Developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'San Fransisco',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((err) => {
//     console.log(err)
// });


// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Columbia',
//     'job/company': 'Flat Branch Home Loans'
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('remove was successful')
// }).catch((err) => {
//     console.log('remove failed: ', err)
// });

// database.ref('isSingle').set(null).then(() => {
//     console.log('is single was removed')
// })