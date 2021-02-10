const btnLogin = document.querySelector('#btn-login')

btnLogin.addEventListener('click', (e) => {
    // evita o comportamento padrão => envio do form
    e.preventDefault()

    const form = document.querySelector('#login')

    const user = {
        email: form.email.value,
        password: form.senha.value
    }

    fetch("/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .catch(err => console.log("ERRO:", err))
        .then(resp => {
            window.location.href = "/clients"
        })
})