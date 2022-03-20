//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDncDWiaR7V_Ciyx0b-o8vuHQE5130Lmzc",
    authDomain: "ckwitter-3c17c.firebaseapp.com",
    databaseURL: "https://ckwitter-3c17c-default-rtdb.firebaseio.com",
    projectId: "ckwitter-3c17c",
    storageBucket: "ckwitter-3c17c.appspot.com",
    messagingSenderId: "987239333996",
    appId: "1:987239333996:web:a24f4c316d41a77a521849"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");
  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        })
        document.getElementById("msg").value="";
        
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message=mesaage_data['message'];
like=message_data['like']
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
likebutton="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span> </button>"
row=namewithtag+messagewithtag+likebutton+spanwithtag;
document.getElementById("output").innerHTML+=row
//End code
    } });  }); }
    function updatelike(messageid){
          buttonid=messageid
          like=document.getElementById(buttonid).value
          update=Number(like)+1
          firebase.database().ref(room_name).child(messageid).update({
                like:update
          })
    }
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }
getData();
