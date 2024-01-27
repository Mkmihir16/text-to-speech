let speech=new SpeechSynthesisUtterance();
console.log(speech)

let voices=[];
let voiceSelect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
voices=window.speechSynthesis.getVoices();
console.log(voices);
voices.forEach((voice,i)=>{
    voiceSelect.options[i]=new Option(voice.name,i)
})
}
document.querySelector('button').addEventListener("click",()=>{
speech.text=document.querySelector("textarea").value;
window.speechSynthesis.speak(speech);
console.log(speech.text);
})
