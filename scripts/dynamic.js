
// document.getElementById("disable").style.display = 'none'

let disabledButton = document.querySelectorAll(".disable")
let buttons = document.querySelectorAll(".completed-btn")

for(let i=0;i<buttons.length;i++){
    document.getElementById(`completed-btn-${i+1}`).style.display='block'

    document.getElementById(`disable-${i+1}`).style.display = 'none'
buttons[i].addEventListener("click",function(event){

event.preventDefault();
alert("Board Updated Successfully")


// assigned task decrement
const taskNumber=document.getElementById('task-assigned-id').innerText
const convertedTaskNumber=parseInt(taskNumber)
document.getElementById('task-assigned-id').innerText=convertedTaskNumber-1

// navbar countdown increment
const navCount = document.getElementById("nav-number").innerText;
const convertedNavCount= parseInt(navCount);
document.getElementById("nav-number").innerText =
convertedNavCount + 1;


// hiding completd button
        document.getElementById(`completed-btn-${i+1}`).style.display='none'

        document.getElementById(`disable-${i+1}`).style.display = 'block'



        // history section
        function getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString(); 
        }
const title=document.getElementById(`task-${i+1}`).innerText

const container=document.getElementById("history-container")

const d=document.createElement("div")
d.classList.add("bg-[#F4F7FF]", "rounded-2xl","p-5");



const p=document.createElement("p")
p.classList.add("text-[#000000]","font-normal","text-sm");
p.innerText=` You have completed the task "${title}" at ${getCurrentTime()}`


d.appendChild(p)
container.appendChild(d)



})

}
// clearing history

document.getElementById("clear-button").addEventListener("click",function(){

document.getElementById("history-container").innerHTML=""

})


// challenge part
// show current date
function currentDate() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

document.getElementById("hero-date").innerText=currentDate()