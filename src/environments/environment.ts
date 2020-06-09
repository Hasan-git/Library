// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC5dGVTBbZjnWCVLhHpXXkDgJrCGQfNLL0",
    authDomain: "kms-web-28531.firebaseapp.com",
    databaseURL: "https://kms-web-28531.firebaseio.com",
    projectId: "kms-web-28531",
    storageBucket: "kms-web-28531.appspot.com",
    messagingSenderId: "994589100541",
    appId: "1:994589100541:web:d7379d9939fdca96563194",
    measurementId: "G-JPH230L3EZ"
  },

  // localImagesEndpoint : "http://localhost:4200/assets/web/img/",
  // svgUrl : "http://localhost:4200/assets/web/",

  localImagesEndpoint: "assets/web/img/",
  svgUrl: "assets/web/"

  // localImagesEndpoint: "./assets/web/img/",
  // svgUrl: "./assets/web/"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
