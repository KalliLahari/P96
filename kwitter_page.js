// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAKedGYPgc39M1QVbGy2uDDBanoXgpXa50",
      authDomain: "kwitter2-a9532.firebaseapp.com",
      databaseURL: "https://kwitter2-a9532-default-rtdb.firebaseio.com",
      projectId: "kwitter2-a9532",
      storageBucket: "kwitter2-a9532.appspot.com",
      messagingSenderId: "983392681790",
      appId: "1:983392681790:web:f777ea29981de66741366f"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
   
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    }
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 
//End code
      } });  }); }
getData();
