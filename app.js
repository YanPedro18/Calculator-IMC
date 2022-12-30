const icon = document.querySelector('.material-symbols-outlined');
const newicon = document.createElement('div')

const button = document.querySelector('button')

icon.addEventListener('mouseover', function modalMc() { //função Modal IMC
   icon.appendChild(newicon)
   newicon.classList.add("icone")

   newicon.innerHTML = `IMC<br>
   Menos do que 18,5 | Abaixo do peso<br>

   Entre 18,5 e 24,9 | Peso normal<br>
   
   Entre 25 e 29,9 | Sobrepeso<br>
   
   Entre 30 e 34,9 | Obesidade grau 1<br>
   
   Entre 35 e 39,9 | Obesidade grau 2<br>
   
   Mais do que 40 | Obesidade grau 3`

   const classicon = document.querySelector('.icone')
  
     if(classicon.style.display == 'block') {

        classicon.style.display = 'none';
    }
    else {
        classicon.style.display = 'block';
    }
});

button.addEventListener('click', function calcImc(e) {
    e.preventDefault();
    const input1 = document.querySelector('#peso1').value;
    const input2 = document.querySelector('#altura2').value;
    const imc = document.querySelector('.resultadoimc');
    const result = document.createElement('p');
    imc.appendChild(result);
   
    parseFloat(input2);
    parseFloat(input1);
    const calc = input1 / input2 ** 2;
    const calimc = calc.toFixed(2);
    
    if(calc <= 18.5 ) {
        const calcimcfinal = document.createTextNode('Abaixo do peso ' + " "+calimc);
        result.appendChild(calcimcfinal);
   
    }else if(calc <= 24.9) {
        const calcimcfinal = document.createTextNode('Peso normal ' + " "+calimc);
        result.appendChild(calcimcfinal);
    }else if (calc <= 29.9) {
        const calcimcfinal = document.createTextNode('Sobrepeso! ' + " "+calimc);
        result.appendChild(calcimcfinal);
    }else if (calc <= 34.9) {
        const calcimcfinal = document.createTextNode('Obesidade Grau 1 ' + "  "+calimc);
        result.appendChild(calcimcfinal);
    }else if (calc == 35 || calc <= 39.9) {
        const calcimcfinal = document.createTextNode('Obesidade Grau 2 ' + "  "+calimc);
        result.appendChild(calcimcfinal);
    }else if (calc > 40) {
        const calcimcfinal = document.createTextNode('Obesidade Grau 3 ' + "  "+calimc);
        result.appendChild(calcimcfinal);
    }
 
    if(input1,input2 == '') {
        window.alert('coloque um valor');
    }
})

