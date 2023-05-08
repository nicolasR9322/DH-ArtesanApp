const qs = (selector) => document.querySelector(selector);

window.addEventListener("load", () => {

    let $inputRegisterName = qs("#name"),
        $registerNameErrors = qs("#nameErrors"),
        $inputPass = qs("#pass"),
        $pass1Errors = qs("#pass1Errors"),
        $fileInputAvatar = qs("#avatar"),
        $avatarErrors = qs("#avatarErrors"),
        $avatarPreview = qs("#avatarPreview"),
        $form = qs("#form"),
        $submitErrors = qs("#submitErrors"),

  

    // regular expresions
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    
    
    
    // validacion del nombre
    $inputRegisterName.addEventListener("blur", () => {
        switch (true) {
            case !$inputRegisterName.value.trim():
                $registerNameErrors.innerText = "El campo nombre es obligatorio";
                $inputRegisterName.classList.add("is-invalid");
                break;
            case $inputRegisterName.value.length < 2:
                $registerNameErrors.innerText = "2 caracteres minimo papu";
                $inputRegisterName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputRegisterName.value):
                $registerNameErrors.innerText = "caracter invalido, solo letras y numeros";
                $inputRegisterName.classList.add("is-invalid");
                break;
            default:
                $inputRegisterName.classList.remove("is-invalid");
                $inputRegisterName.classList.add("is-valid");
                $registerNameErrors.innerText = "";
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
    

    $fileInputAvatar.addEventListener('change', () => {
        let filePath = $fileInputAvatar.value, //Capturo el valor del input
            allowExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $avatarErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $fileInputAvatar.value = '';
            $avatarPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($fileInputAvatar.files);
            if($fileInputAvatar.files && $fileInputAvatar.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $avatarPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($fileInputAvatar.files[0]);
                $avatarErrors.innerHTML = '';
                $fileInputAvatar.classList.remove('is-invalid')
            }
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