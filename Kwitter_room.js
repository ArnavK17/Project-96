var firebaseConfig = {
    apiKey: "AIzaSyAP_HkmRIlXfDwuPQkn_skj05M32w-xcfc",
    authDomain: "lets-chat-web-app-2ae01.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-2ae01-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-2ae01",
    storageBucket: "lets-chat-web-app-2ae01.appspot.com",
    messagingSenderId: "305552380698",
    appId: "1:305552380698:web:13bce852de075da66712a3"
  };
  
  
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById('user_name').innerHTML="welcome "+user_name+"!";
   function addRoom(){
   
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
//End code
});});}
function redirectToRoomName(name){
  console.log("name");
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
        }
getData();
    }
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
   