window.addEventListener("load",function(){
    let toggle=document.getElementById("_1st-toggle-btn");
    let body=document.body;
    toggle.addEventListener("click", function(){
        let val=body.classList.toggle("dark")
        localStorage.setItem("_1st-toggle-btn",val)
    })
    
    let valor=localStorage.getItem("_1st-toggle-btn")
    
    if (valor=="true") {
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
    } 


});
