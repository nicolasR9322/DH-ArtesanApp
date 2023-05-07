const qs = (selector) => document.querySelector(selector);

window.addEventListener("load", () => {
    let $nameInput = qs("#name"),
        $nameErrors = qs("#nameErrors"),
        $descriptionInput = qs("#description"),
        $descriptionErrors = qs("#descriptionErrors"),
        $fileInput = qs("#file"),
        $fileErrors = qs("#fileErrors"),
        $preview = qs("#preview"),
        $categoryInput = qs("#category"),
        $categoryErrors = qs("#categoryErrors"),
        $priceInput = qs("#price"),
        $priceErrors = qs("#priceErrors"),
        $discountInput = qs("#discount"),
        $discountErrors = qs("#discountErrors"),
        $form = qs("#form"),
        $submitErrors = qs("#submitErrors");
    
    
    $nameInput.addEventListener("blur", () => {
        switch (true) {
            case !$nameInput.value.trim():
                $nameErrors.innerText = "el nombre del producto no puede estar vacio";
                $nameInput.classList.add("is-invalid");
                break;
                case $nameInput.value.length < 5:
                    $nameErrors.innerText = "el nombre debe contener mas de 5 caracteres";
                    $nameInput.classList.add("is-invalid");
                break;
            default:
                $nameInput.classList.remove("is-invalid");
                $nameInput.classList.add("is-valid");
                $nameErrors.innerText = "";
                break;
        }
    })

    $descriptionInput.addEventListener("blur", () => {
        switch (true) {
                case $descriptionInput.value.length < 20:
                    $descriptionErrors.innerText = "el nombre debe contener mas de 20 caracteres";
                    $descriptionInput.classList.add("is-invalid");
                break;
            default:
                $descriptionInput.classList.remove("is-invalid");
                $descriptionInput.classList.add("is-valid");
                $descriptionErrors.innerText = "";
                break;
        }
    })

    $fileInput.addEventListener("change", () => {
        let filePath = $fileInput.value ,
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i
            
        if(!allowefExtensions.exec(filePath)){
            $fileErrors.innerText  = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $fileInput.value = "";
            $preview.innerHTML = "";
            return false;
        } else {
            if($fileInput.files && $fileInput.files[0]){
                let reader = new FileReader();
                reader.onload = (e) => $preview.innerHTML = `<img src="${e.target.result}"/>`;
                reader.readAsDataURL($fileInput.files[0]);
                $fileErrors.innerText = "";
                $fileInput.classList.remove("is-invalid");
            };
        }
    })

    $categoryInput.addEventListener("blur", ()=> {
        switch (true) {
            case !$categoryInput.value.trim():
                    $categoryInput.classList.add("is-invalid");
                    $categoryErrors.innerText = "debe elegir una categoria"
                break;
        
            default:
                $categoryInput.classList.remove("is-invalid");
                $categoryInput.classList.add("is-valid");
                $categoryErrors.innerText = ""
                break;
        }

    })

    $priceInput.addEventListener("blur", () => {
        switch (true) {
            case $priceInput.value <= 0:
                    $priceInput.classList.add("is-invalid");
                    $priceErrors.innerText = "debe poner un precio";
                break;
            case $priceInput.value < 0:
                    $priceInput.classList.add("is-invalid");
                    $priceErrors.innerText = "no puede poner precios negativos";
                break;
        
            default:
                    $priceInput.classList.remove("is-invalid");
                    $priceInput.classList.add("is-valid");
                    $priceErrors.innerText = "";
                break;
        }
    })
    $discountInput.addEventListener("blur", () => {
        switch (true) {
            case $discountInput.value < 0:
                    $discountInput.classList.add("is-invalid");
                    $discountErrors.innerText = "no puede poner descuentos negativos";
                break;
            case $discountInput.value > 100:
                    $discountInput.classList.add("is-invalid");
                    $discountErrors.innerText = "no puede poner descuentos mayores a 100";
                break;
        
            default:
                    $discountInput.classList.remove("is-invalid");
                    $discountInput.classList.add("is-valid");
                    $discountErrors.innerText = "";
                break;
        }
    })

    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        let variable = "";
        const FORM_ELEMENTS = event.target.elements;
        for (let i = 0; i < FORM_ELEMENTS.length - 2; i++) {
            const element = FORM_ELEMENTS[i];
            if(element.value === "" && element.type != "file"){
                element.classList.add("is-invalid")
                console.log(element.value)
                variable += element.value
            }
        }
        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0;
        errores ? $submitErrors.innerText = "Hay errores en su formulario, por favor verifique que todos los valores sean correctos" : $form.submit()
    })
})