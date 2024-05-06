//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBGmn8WzH1oUkW28_c1BHlEc-osZtI1rjI",
      authDomain: "kwitter-a16d7.firebaseapp.com",
      databaseURL: "https://kwitter-a16d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-a16d7",
      storageBucket: "kwitter-a16d7.appspot.com",
      messagingSenderId: "404389047984",
      appId: "1:404389047984:web:8d7b56690ef8ac92ea1575"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
room_name= localStorage.getItem("room_name")
function send (){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name :user_name,
            message:msg,
            like:0
      })
document.getElementById("msg").value =""
}
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
      getData();
//Start code

//End code
