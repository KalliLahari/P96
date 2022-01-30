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

user_name=localStorage.getItem("user_name");
    document.getElementById("user").innerHTML="Welcome "+user_name+" ! ";

    function add_room(){
    room_name=document.getElementById("user_room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"Adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names);
      row="<div id="+Room_names+" class='room_name' onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirect_to_room_name(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
