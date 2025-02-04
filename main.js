
document.querySelectorAll(".custom-checkbox input").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        
        let container = this.closest(".short-form-video");

      
        if (this.checked) {
            container.style.borderColor = "#6200ea";
        } else {
            container.style.borderColor = "#d0d5dd";
        }
    });
});



