// const troca=document.querySelectorAll("#image-picker li");

// troca.forEach((btn) => {
//     btn.addEventListener("click", () => {
//             console.log("aa");
//     })
// });

document.addEventListener("DOMContentLoaded", () => {
    const imagem = document.getElementById("imagem");
    let preto = document.getElementById("preto");
    let azul = document.getElementById("azul");
    let verde = document.getElementById("verde");
  
    preto.addEventListener("click", () => {
      let preto = "imagens/iphone2.jpg";
      imagem.src = preto;
    });
    verde.addEventListener("click", () =>{
        let verde = "imagens/iphone3.jpg"
        imagem.src=verde;
    });
    azul.addEventListener("click", () =>{
        let azul="imagens/iphone.jpg"
        imagem.src=azul
    })
  
  });