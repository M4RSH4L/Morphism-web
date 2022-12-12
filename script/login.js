function fillInput() {
    // Obtener el elemento input y asignarle un texto
    var input = document.getElementById("miInput");
    input.value = "Este es mi texto";
  
    // Obtener el elemento h1 y asignarle el valor del input
    var h1 = document.getElementById("miTitulo");
    h1.innerHTML = input.value;
  }
  