document.addEventListener('DOMContentLoaded', function() {
    //evento busqueda

    var searchButton = document.getElementById("inpt_cbu_search_button");

    searchButton.addEventListener("click",function(){
        let input_cbu_search = document.getElementById("inpt_cbu_search");
        /*aca se verifica si existe algun cbu o alias habilitado (en el futuro
        se verificara en la base de datos)
        CBU de ejemplo: 0123456789012345678901
        Alias de ejemplo: bee.bank.bank
        */
        if(input_cbu_search.value=="0123456789012345678901" || input_cbu_search.value=="bee.bank.bank"){
            let input_destinatario = document.getElementById("inpt_destinatario");
            let input_origen = document.getElementById("inpt_origen");
            let input_banco = document.getElementById("inpt_banco");
            let input_alias = document.getElementById("inpt_alias");
            let input_cbu = document.getElementById("inpt_cbu");
            let input_cuil = document.getElementById("inpt_cuil");

            input_destinatario.value="Nombre SegundoNombre Apellido";
            input_banco.value="Otro banco";
            input_origen.value="BeeBank";
            input_alias.value="bee.bank.bank";
            input_cbu.value="0123456789012345678901";
            input_cuil.value="11-11111111-1";
        }
        else{
            alert("Usuario/Cuenta inexistente");
        }
    });
    
    //evento transferencia
    
    var transferButton = document.getElementById("inpt_transferir");

    transferButton.addEventListener("click",function(){
        let input_monto = document.getElementById("inpt_monto");
        let input_alias = document.getElementById("inpt_alias");
        let input_cbu = document.getElementById("inpt_cbu");
        let input_check= document.getElementById("inpt_check");
    });
});