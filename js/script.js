function validacao(){
    let Username = "Pedro";
    let Password = "123456";
    
        let usuario =document.getElementById("usuario").value;
        
        let senha = document.getElementById ("senha").value;
        
    //usuario vazio
        if (usuario == "" && senha ==""){
            alert ("Não foi possivel logar, usuario e senha vazio");
        }
        else if (usuario == "" && senha == Password){
            alert ("Não foi possivel logar, por favor preencha o usuario");
        }
        else if ( usuario == "" && senha !=Password){
            alert ("Não foi possivel logar, senha incorreta e usuario em branco");    
        }
        //senha vazia
        else if ( usuario != Username && senha ==""){
            alert(" Não foi possivel logar, Usuario inválido e senha vazia")
        }
        else if ( usuario != Username && senha ==Password){
            alert(" Não foi possivel logar, Usuario inválido. ")
        }
        else if ( usuario != Username && senha != Password){
            alert(" Não foi possível logar, Usuario/senha inválidos")
        }
        else if ( usuario == Username && senha ==""){
            alert(" Não foi possível logar, senha em branco.")
        }   
        else if ( usuario == Username && senha !=Password){
            alert(" Não foi possível logar, senha Inválida.")
        }
       
        else if( usuario == Username && senha == Password){
            alert(" Usuario valido !!");
            window.open("http://127.0.0.1:5501/Teste1.html");
          //  document.write("test.html");
        }
    }
