
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBlTzzeFHQAG7NQ5SP-1ZuCdAPLFIT-mS4",
      authDomain: "kwitter-d43e4.firebaseapp.com",
      databaseURL: "https://kwitter-d43e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-d43e4",
      storageBucket: "kwitter-d43e4.appspot.com",
      messagingSenderId: "280270820238",
      appId: "1:280270820238:web:4574e6952b0e24e720cadf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

// Initialize Firebase

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome"+user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({purpose:"addingRoomname"})
localStorage.setItem("room_name",room_name);
window.location="Kwitter_page.html"

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names +"Room_names")
                  row="<h1 id="+Room_names+" class='Room_name' onclick='directto(this.id)'>#"+Room_names+"</h1><hr>"
                  document.getElementById("output").innerHTML+=row


                  //End code
            });
      });
}
getData();
function directto(name){
window.location="Kwitter_page.html"
}