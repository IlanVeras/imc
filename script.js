

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('massa').value;
    const resultado = document.getElementById('resultado')
    resultado.style.width = '100px'
    resultado.style.height = '150px'
    if (nome !== '' && altura !== '' && peso !== ''){
        imc = peso / (altura*altura)
        //alert(`${nome}, você tem ${altura}m de altura e pesa ${peso}Kg e seu IMC é de ${imc.toFixed(2)}`)
        resultado.innerHTML = `${nome}, você tem ${altura}m de altura e pesa ${peso}Kg e seu IMC é de ${imc.toFixed(2)}`
    } else{
        alert('Preencha todos os valores')
    }
}