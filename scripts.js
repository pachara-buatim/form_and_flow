const bookingDialog = document.querySelector("#booking-dialog");
const bookingForm = document.querySelector("#booking-form");
const classChoice = document.querySelector("#class-choice");
const bookingSuccess = document.querySelector("#booking-success");

document.querySelectorAll("[data-book]").forEach((button) => {
    button.addEventListener("click", () => {
    const requestedClass = button.dataset.book;
    bookingForm.hidden = false;
    bookingSuccess.hidden = true;
    bookingForm.reset();
    if ([...classChoice.options].some((option) => option.value === requestedClass)) {
        classChoice.value = requestedClass;
    }
    bookingDialog.showModal();
    });
});

document.querySelector(".close-button").addEventListener("click", () => bookingDialog.close());
bookingDialog.addEventListener("click", (event) => {
    if (event.target === bookingDialog) bookingDialog.close();
});

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    const firstName = formData.get("name").trim().split(/\s+/)[0];
    bookingForm.hidden = true;
    bookingSuccess.textContent = `You're on the list, ${firstName}. We saved your spot for ${formData.get("class")} and sent the details to ${formData.get("email").trim()}.`;
    bookingSuccess.hidden = false;
});