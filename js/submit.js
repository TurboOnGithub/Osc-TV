document.addEventListener("DOMContentLoaded", () => {
    const submitForm = document.getElementById("submitForm");

    submitForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const showName = document.getElementById("showName").value;
        const showDescription = document.getElementById("showDescription").value;
        const showLink = document.getElementById("showLink").value;

        // Validate the input (basic check for empty fields)
        if (!showName || !showDescription || !showLink) {
            alert("Please fill out all fields.");
            return;
        }

        // If form is valid, you can either send this data to a backend server or handle it here
        console.log("Object Show Submitted:", {
            showName,
            showDescription,
            showLink,
        });

        // Show a success message (this could be changed to actual data submission)
        alert("Your object show has been submitted successfully!");

        // Reset the form after submission
        submitForm.reset();
    });
});
