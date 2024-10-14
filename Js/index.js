// Si el usuario esta logueado , tomará los datos de la tabla, si no , debe loguearse
let user = JSON.parse(localStorage.getItem('login_success')) || false

// Solicitará al usuario loguearse para ingresar al hom
if(!user) {
    Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesion',
        text: 'Debes iniciar sesión para acceder a esta página',
        confirmButtonText: 'Ir a Iniciar Sesión',
        showCancelButton: false,
        allowOutsideClick: false
        // Si el usuario le da click en iniciar seisión em redireccionará al login.html
    }).then((result) => {
        if(result.isConfirmed){
            window.location.href = 'login.html'
        }
    });
}

// Creamos un opo-up para que hacer una confirmación del cierre de la sesión
let logout = document.querySelector('#logout')
logout.addEventListener('click' , () => {
    Swal.fire({
        icon: 'info',
        title: 'Cerrar Sesión',
        text: '¿Estás seguro de que quieres cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Si, cerrar sesión',
        cancelButtonText: 'Cancelar'
        // Se cierra la sesión activa del usuario
    }).then((result) => {
        if(result.isConfirmed){
            localStorage.removeItem('login_success');
            Swal.fire({
                icon: 'success',
                title: 'Sesión Cerrada',
                text: 'Tu sesión ha sido cerrada correctamente.',
                confirmButtonText: 'Ok'
                // Cuando cierre sesión lo redirige al login.
            }).then(() => {
                window.location.href = 'login.html';
            });
        }
    });
});


