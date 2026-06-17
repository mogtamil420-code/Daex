function sendMessage(){

const input =
document.getElementById("userInput");

const messages =
document.getElementById("messages");

const text =
input.value.trim();

if(text === "") return;

messages.innerHTML += `
<div class="user-message">
${text}
</div>
`;

setTimeout(()=>{

messages.innerHTML += `
<div class="ai-message">
Hello! I am Daex AI.
Real AI connection coming soon.
</div>
`;

messages.scrollTop =
messages.scrollHeight;

},500);

input.value="";

messages.scrollTop =
messages.scrollHeight;
}
