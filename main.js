var motivos = [
    "Golden Retriver",
    "Husky Siberiano",
    "Dashund",
    "Border Collie",
      "Mastiff Ingles"
  ];
  
  var imagens = [ "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/15/2063712264-shutterstock1738196390.jpg",
    "https://www.petz.com.br/blog/wp-content/uploads/2022/03/curiosidades-sobre-husky-siberiano.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tRT5GJq9zbaK3-zMQIRMoqNkYqTmoWs2ZA&usqp=CAU",
    "https://static.wixstatic.com/media/2ee1b2_899b9ea6022849968735c13a34aff545~mv2.jpg/v1/fill/w_492,h_370,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/border-collie-filhotes-lindos.jpg!",
    "https://love.doghero.com.br/wp-content/uploads/2018/03/mastiff_puppy1.jpg",     
    
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  