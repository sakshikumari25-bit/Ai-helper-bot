const jokeBtn=document.getElementById("jokeBtn");
const motivationBtn=document.getElementById("motivationBtn");
const tipBtn=document.getElementById("tipBtn");
const result = document.getElementById("result");
          
jokeBtn.addEventListener("click", async() =>{
    result.innerText = "⏳ Loading...";
    
    try {

       console.log("Joke Button Clicked")
       const response= await fetch("http://localhost:3000/joke");
       const data = await response.json();
       result.innerText = data.message;

    } catch (error) {

      result.innerText = "❌ Something went wrong.";

    }
});

motivationBtn .addEventListener("click",async()=>{
    result.innerText = "⏳ Loading...";
try{
    const response = await fetch("http://localhost:3000/motivation");
    const data = await response.json();
    result.innerText = data.message;

}catch (error)  {
    result.innerText ="something went wrong";
}

});


tipBtn.addEventListener("click",async()=>{
    result.innerText = "⏳ Loading...";

 try{   
    const response = await fetch("http://localhost:3000/tip-of-the-day");
    const data = await response.json();
    result.innerText = data.message;
 }catch(error){
    result.innerText ="something went wrong";
 }
});