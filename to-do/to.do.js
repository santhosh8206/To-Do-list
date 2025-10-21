var submit = document.getElementById("submit");
var input = document.getElementById("input");
var con = document.getElementById("con");

   function createbox(){
           var val=input.value.trim();
           if (!val) return;
           
           var box=document.createElement("div");
           box.className="container-fluid border rounded-5 d-flex justify-content-between mb-3 bg-light";
           box.id="box";
       
           box.innerHTML=`
           <p>${val}</p>
           <div>
             <button class="edit btn btn-primary white-text">Edit</button>
             <button class="remove btn btn-danger white-text ">Remove</button>
           </div>
           `;
           con.appendChild(box);



           const editBtn= box.querySelector(".edit");
           const removeBtn= box.querySelector(".remove")
       
           editBtn.addEventListener("click", () => {
               input.value=val;
               box.remove();
           });
           removeBtn.addEventListener("click", () => {
               box.remove();
           });
   }

   document.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        createbox(input.value);
        input.value="";
    }
   });

   submit.addEventListener("click",()=>{
    createbox(input.value);
    input.value="";
   });
    