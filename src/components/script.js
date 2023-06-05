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

    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]")

        if(!isDropdownButton && e.target.closest("[data-dropdown]")!= null) return

        let currDropdown;
        if(isDropdownButton){
            currDropdown = e.target.closest("[data-dropdown]")
            currDropdown.classList.toggle("active")
        }

        document.querySelectorAll("[data-dropdown].active").forEach(d => {
            if(d === currDropdown) return
            d.classList.remove("active")
        })
    })

    const toggleButton = document.getElementsByClassName("toggle-button")[0]
    const navLinks = document.getElementsByClassName("ham-navbar")[0]

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active")
    })

};