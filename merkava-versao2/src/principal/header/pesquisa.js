export function exibirPesq() {
    let pesq = document.querySelector('.pesq');
    pesq.style.display = "block";
    clearTimeout(pesq.timeoutID);
  }
  
  export function ocultarPesq() {
    let pesq = document.querySelector('.pesq');
    pesq.timeoutID = setTimeout(() => {
      pesq.style.display = "none";
    }, 0);
  }
  
  export function filtrarItens() {
    let input = document.getElementById("filtro").value.toLowerCase().trim();
    let itens = document.getElementsByClassName("c");
  
    for (var i = 0; i < itens.length; i++) {
      let item = itens[i];
      let nomeElemento = item.querySelector(".b");
      let nome = nomeElemento.textContent.toLowerCase();
      let nomeDestacado = '';
  
      for (var j = 0; j < nome.length; j++) {
        let letra = nome[j];
        if (input.includes(letra) || input === '') {
          nomeDestacado += '<strong>' + letra + '</strong>';
        } else {
          nomeDestacado += letra;
        }
      }
  
      nomeElemento.innerHTML = nomeDestacado;
  
      if (nome.includes(input) || input === '') {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
  
      // Adiciona o evento de entrada do mouse (mouseenter)
      item.addEventListener("mouseenter", function() {
        this.style.display = "block";
        clearTimeout(this.timeoutID);
      });
  
      // Adiciona o evento de saída do mouse (mouseleave)
      item.addEventListener("mouseleave", function() {
        var self = this;
        this.timeoutID = setTimeout(function() {
          self.style.display = "none";
        }, 100);
      });
    }
  }
  