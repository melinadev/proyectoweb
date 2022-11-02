let btn = document.getElementById("resumenBtn");
let resumen = document.getElementById('totalAPagar');
let descuento;

function desc(){
    let cantidad = document.getElementById("cantidad").value;
    let selection = document.getElementById("select").value;
    let total = cantidad*200;
    if(selection === 'Junior'){
        descuento = total*0.85;
        console.log(total);
    }else if(selection === 'Trainee'){
        descuento = total*0.5;
    }else{
        descuento = total*0.2;
    }
    resumen.innerText = `Total a Pagar $: ${descuento}`;
}

btn.addEventListener("click",desc);


//--------------------------------------------
//----------RESET FORMULARIO------------------
/* function reseteo(){
    document.getElementById('name').reset();

    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('mail').value = "3@b";
    document.getElementById('select').value = "";
    resumen.innerText = `Total a Pagar $:`;
} */



/* let totalAPagar;

function total(){
    document.getElementById('totalAPagar').innerHTML= `Total a Pagar $: ${descuento(selection)}`;
}

function descuento(selection){
    if (selection === "Junior"){
        totalAPagar = Math.floor(cantidad * 200 * 0.85);
        console.log(totalAPagar,cantidad);
    } else if (selection == "Trainee"){
        totalAPagar = cantidad * 200 * 0.5;
    } else{
        totalAPagar = cantidad * 200 * 0.2;
        console.log(totalAPagar,cantidad);
    }
    return totalAPagar;
} */

