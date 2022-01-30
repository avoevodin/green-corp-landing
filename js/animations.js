const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + "+";
        } else {
            element.innerText = i;
        }
    }
    i += 100;

    setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber);
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();

document.querySelector("#budget").addEventListener("change", function handleSelectChange(event) {
    const otherInput = document.querySelector(".form__other-input");

    if (event.target.value === "other") {
        const formContainer = document.createElement("div");
        formContainer.classList.add("form__group", "form__other-input");
        
        const input = document.createElement("input");
        input.placeholder = "Введите ваш вариант";
        input.type = "text";

        formContainer.appendChild(input);

        document.querySelector("#form form").insertBefore(formContainer,
            document.querySelector(".form_submit"));
    } else if (Boolean(otherInput)) {
        document.querySelector("#form form").removeChild(otherInput);
    }
})
