//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAlndnjz_3ZehrQ5TW1BwFfpVl20Yus98Q",
      authDomain: "javatter-2408b.firebaseapp.com",
      databaseURL: "https://javatter-2408b-default-rtdb.firebaseio.com",
      projectId: "javatter-2408b",
      storageBucket: "javatter-2408b.appspot.com",
      messagingSenderId: "272219081647",
      appId: "1:272219081647:web:779cb84ffd7e37b03c3d5a",
      measurementId: "G-E12HT3MP7V"
    };
      
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      })
      document.getElementById("msg").value = "";
}

      } });  }); }
getData();
