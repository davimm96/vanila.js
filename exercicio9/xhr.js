function ajax(){
  var xhr = new XMLHttpRequest()
  var documento

  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      documento = xhr.response
      document.querySelector("#res").innerHTML = documento
    }
  }

  xhr.open("GET", "teste.html")
  xhr.send(documento)
}
