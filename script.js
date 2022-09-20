

function calcular(){
    var primeiraNota = parseFloat( document.getElementById("Nota1").value);
    var segundaNota = parseFloat (document.getElementById("Nota2").value);
    var terceiraNota = parseFloat(document.getElementById("Nota3").value);
    var quartaNota =parseFloat(document.getElementById("Nota4").value);
    
    var mediaFinal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1);
    var resultado = document.getElementById("resultado")
    
     

    if(mediaFinal >= 7 || mediaFinal == 10){
       resultado.innerHTML = "<h4 class='media'>Média Final: " + mediaFinal + "</h4>"
                            + "<p class='resul1'> Aprovado </p>"
                            + "<img class ='foto'src='https://viciados.net/wp-content/uploads/2020/02/Naruto-Cl%C3%A1ssico-e-Naruto-Shippuden-fillers.jpg'/>"

    }else if (mediaFinal < 5){
        resultado.innerHTML =  "<h4 class='media'>Média Final: " + mediaFinal + "</h4>"
                             + "<p class='resul2'> Reprovado </p>" 
                             + "<img class='foto' src='https://doublelasers.com/wp-content/uploads/2021/10/Screenshot-100.jpg' />"

    }else{
        resultado.innerHTML = "<h4 class='media'>Média Final: " + mediaFinal + "</h4>"
                             + "<p class='resul3'> Recuperação </p>"
                             + "<img class='foto' src='http://1.bp.blogspot.com/-4-9fY-MwPUo/UaqlE28hjnI/AAAAAAAAAWc/axUt9aJBbj4/s1600/bscap0001.jpg' />"
    }

}