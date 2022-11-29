const cad = document.querySelector('#submitcad')


cad.addEventListener("click", function(event){
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const idade = document.querySelector('#idade').value
    const radioyes = document.querySelector('#radioyes:checked').value
    var midade = radioyes;
    if(radioyes ==="true"){
        midade = true
    }
    else{
        midade = false
    }


    const checkyes = document.querySelector('#checkyes:checked') !=null


    const digit = document.querySelector('#digit').value


    console.table(["Nome: "+nome,"Email: "+email,"Idade: "+idade,"Maior de Idade: "+radioyes,"Newsletter: "+checkyes,"Qualidades: "+digit])

    var objeto = {
        nome: nome,
        email: email,
        idade: Number(idade),
        radioyes: Boolean(radioyes),
        checkyes: Boolean(checkyes),
        digit: digit


    }

    console.log(objeto)


})