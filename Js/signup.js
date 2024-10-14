// LLamaremos el id del formulario del registro
let signupForm = document.querySelector("#signupForm");

signupForm.addEventListener('submit', (e) => {
    //Les ayuda a prevenir que la pagina se recargue de manera automatica
    e.preventDefault()

    //obtener los valores del formulario
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    // los parser realizan conversiones 
    let User = JSON.parse(localStorage.getItem('users')) || []
    //el find se encarga de encontrar un elemento de una base de datos
    let isUserRegistered = User.find(user => user.email === email)
    //Si el correo ya existe, que muestre que se encuentra en uso
    if(isUserRegistered) {
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'El correo ya se encuentra en uso, usa otro diferente'
        })
        return
    }
    //Almacenaremos los datos del usuario
    User.push({name, email, password})
    //Convertimos los datos del nuevo usuario de string a objetos
    localStorage.setItem('users' , JSON.stringify(User))
    //Mostrar el mensaje de registro exitoso
    Swal.fire({
        icon: 'success', 
        title: 'Registro exitoso',
        text: 'Tu registro ha sido exitoso'
    }).then(() => {
        window.location.href="login.html"
    })
})