const qs = (selector) => document.querySelector(selector);

window.addEventListener("load", () => {

    let $inputEmailRegister = qs("#email"),
        $emailErrors = qs("#emailErrors"),
        $inputPass = qs("#pass"),
        $pass1Errors = qs("#pass1Errors"),
        $form = qs("#form"),
        $submitErrors = qs("#submitErrors"),

  

    // regular expresions
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    
    // validacion del email

    $inputEmailRegister.addEventListener("blur", () => {
            switch (true) {
                case !$inputEmailRegister.value.trim():
                    $emailErrors.innerText = "el campo email es obligatorio";
                    $inputEmailRegister.classList.add("is-invalid");
                    break;
                case !regExEmail.test($inputEmailRegister.value.trim()):
                    $emailErrors.innerText = "Debe ingresar un email valido";
                    $inputEmailRegister.classList.add("is-invalid");
                    break;
                default:
                    $inputEmailRegister.classList.remove("is-invalid");
                    $inputEmailRegister.classList.add("is-valid");
                    $emailErrors.innerText = "";
                    break;
            }

    })

    $inputPass.addEventListener("blur", () => {
        switch (true) {
            case !$inputPass.value.trim():
                $pass1Errors.innerText = "el campo password es obligatorio";
                $inputPass.classList.add("is-invalid");
                break;
            case $inputPass.value.length < 8:
                $pass1Errors.innerText = "el campo password debe tener como minimo 8 caracteres";
                $inputPass.classList.add("is-invalid");
                break;
            case !regExPass.test($inputPass.value.trim()):
                $pass1Errors.innerText = "el campo password debe tener letras mayúsculas, minúsculas, un número y un carácter especial";
                $inputPass.classList.add("is-invalid");
                break;
            default:
                $inputPass.classList.remove("is-invalid");
                $inputPass.classList.add("is-valid");
                $pass1Errors.innerText = "";
                break;
        }
    })
    
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const FORM_ELEMENTS = event.target.elements;
        for (let i = 0; i < FORM_ELEMENTS.length - 1; i++) {
            const element = FORM_ELEMENTS[i];
            if(element.value === "" && element.type != "file"){
                element.classList.add("is-invalid")
            }
            
        }

        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0;

        if(errores){
            $submitErrors.innerText = "Hay errores en su formulario, por favor verifique que todos los valores sean correctos";
        } else {
            $form.submit();
        }
    })

})