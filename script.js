let createAcc = document.getElementById('form-subm');
        createAcc.addEventListener('click', () => {
            let form = document.getElementById('createAccForm');
            let inputs = form.querySelectorAll('input');

            let k = 0;

            inputs.forEach(input => {
                let errorMessage = input.nextElementSibling;

                if (!input.value.trim()) {
                    errorMessage.innerText = '*Это обязательное поле';
                    input.style.border = '2px solid red';
                    k++;
                } else {
                    errorMessage.innerText = '';
                    input.style.border = '2px solid green';
                }

            });
            if (k == 0) {
                form.submit();

            }
        });
