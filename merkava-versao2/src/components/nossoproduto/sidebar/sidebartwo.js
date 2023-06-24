// Função para lidar com o clique no link da barra lateral
export function clickSideBar(){
  function meuLinkClicado(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
  
    var textoLink = event.target.textContent.toLowerCase(); // Converte o texto do link para minúsculas
  
    var orderDiv = document.querySelector('.order'); // Seleciona a div "order"
  
    var h3Elements = orderDiv.querySelectorAll('h3'); // Seleciona todos os elementos <h3> dentro da div "order"
  
    // Itera sobre os elementos <h3>
    for (var i = 0; i < h3Elements.length; i++) {
      var h3Text = h3Elements[i].textContent.toLowerCase(); // Converte o texto do elemento <h3> para minúsculas
  
      // Verifica se o texto do link corresponde ao texto do elemento <h3>
      if (textoLink === h3Text) {
        // Exibe o elemento correspondente e seu conteúdo HTML
        h3Elements[i].parentNode.style.display = 'block';
        h3Elements[i].parentNode.innerHTML = h3Elements[i].parentNode.innerHTML;
      } else {
        // Oculta os outros elementos não correspondentes
        h3Elements[i].parentNode.style.display = 'none';
      }
    }
    switch (textoLink) {
        case 'caixa sanfonada':
          document.querySelector('.order .second').classList.add('two-col');
          break;
        case 'carrinhos auxiliares':
          document.querySelector('.order .three').classList.add('three-col');
          break;
        
        // Adicione mais cases conforme necessário para outras categorias de produto
      }

  }
  var linksSidebar = document.querySelectorAll('.sidebar .catpro');
  linksSidebar.forEach(function (link) {
    link.addEventListener('click', meuLinkClicado);
  });
}
  // Adiciona o evento de clique aos links da barra lateral com a classe "catpro"
  
  