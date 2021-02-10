const botao = document.querySelector("#botaoAdd")
botao.addEventListener("click", e => {
    e.preventDefault()
    const corpoDaTabela = document.querySelector("#clientTable tbody")
    const linha = document.createElement('tr')
    const form = document.querySelector("#formulario")
    const errName = document.querySelector("#errorName")
    const errEmail = document.querySelector("#errorEmail")
    const errPhone = document.querySelector("#errorPhone")
    const errPlano = document.querySelector("#errorPlano")

    if (errName.innerText) errName.innerText = ""
    if (errEmail.innerText) errEmail.innerText = ""
    if (errPhone.innerText) errPhone.innerText = ""
    if (errPlano.innerText) errPlano.innerText = ""

    if (!form.name.value) return errName.innerText = "Nome inválido!"
    if (!form.email.value) return errEmail.innerText = "email inválido!"
    if (!form.phone.value) return errPhone.innerText = "telefone inválido!"
    if (!form.plano.value) return errPlano.innerText = "plano inválido!"

    const user = {
        n: form.name.value,
        p: form.email.value,
        t: form.phone.value,
        pl: form.plano.value
    }

    const array = [...Object.values(user)]

    for (i = 0; i < array.length; i++) {
        const celula = document.createElement('td')
        celula.innerText = array[i]
        linha.appendChild(celula)
    }

    corpoDaTabela.appendChild(linha)

})