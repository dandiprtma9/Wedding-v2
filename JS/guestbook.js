const form = document.getElementById("rsvpForm");

if (form) {

form.addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;

const attendance = document.getElementById("attendance").value;

await addDoc(

collection(db,"rsvp"),

{

name,

attendance,

createdAt:new Date()

}

);

alert("RSVP berhasil dikirim.");

form.reset();

});

}
async function loadGuestbook(){

const snapshot = await getDocs(collection(db,"guestbook"));

const container = document.getElementById("messages");

container.innerHTML="";

snapshot.forEach((doc)=>{

const data=doc.data();

container.innerHTML += `

<div class="message">

<h4>${data.name}</h4>

<p>${data.message}</p>

</div>

`;

});

}

loadGuestbook();
const send=document.getElementById("sendMessage");

if(send){

send.addEventListener("click",async()=>{

const name=document.getElementById("name").value;

const message=document.getElementById("message").value;

await addDoc(

collection(db,"guestbook"),

{

name,

message,

createdAt:new Date()

}

);

alert("Ucapan berhasil dikirim.");

loadGuestbook();

});

}