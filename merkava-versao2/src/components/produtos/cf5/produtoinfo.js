


 
  
 
 export function funcDes() {
  let p1 = document.querySelector(".descricao1");
  let p2 = document.querySelector(".informacao");
  let btn1 = document.querySelector(".des");
    p1.style.display = "block";
    p2.style.display = "none";
    btn1.addEventListener("click", funcDes);
  }
  export function funcInf(){
    let p1 = document.querySelector(".descricao1");
    let p2 = document.querySelector(".informacao");
    let btn2 = document.querySelector(".infad");
    
  btn2.addEventListener("click", function(){
    p2.style.display = "block";
    p1.style.display = "none";
  });
   }



