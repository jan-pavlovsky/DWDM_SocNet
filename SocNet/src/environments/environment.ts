// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  testVal: 'mee',
  firebase: {
    apiKey: "AIzaSyB7_TnQxwfqZbqv7dg4tb9vhA-caaiFCwE",
    authDomain: "socnet-d9a4a.firebaseapp.com",
    databaseURL: "https://socnet-d9a4a.firebaseio.com",
    projectId: "socnet-d9a4a",
    storageBucket: "socnet-d9a4a.appspot.com",
    messagingSenderId: "6966806466"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
