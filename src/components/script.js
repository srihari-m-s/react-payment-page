window.onload = (event) => {

    const inputs = document.getElementsByName('price');


    inputs.forEach(elem => {

        if (elem.id === "8"){
            elem.disabled = true;
            elem.parentElement.parentElement.classList.add("expired");
        } 

        if (elem.id === "15"){
            elem.parentElement.parentElement.classList.add("recommended");
        }
    });


};