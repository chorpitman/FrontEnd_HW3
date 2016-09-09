<!--Initialize Firebase-->
var config = {
    apiKey: "AIzaSyBlUqVOu3gbIrEWnggo8DAjfYfgmCye3Dk",
    authDomain: "cv-base-history.firebaseapp.com",
    databaseURL: "https://cv-base-history.firebaseio.com",
    storageBucket: "cv-base-history.appspot.com",
};

firebase.initializeApp(config);
var database = firebase.database();
