document.addEventListener("DOMContentLoaded", () => {
    const submitForm = document.getElementById("submitForm");

    // Handle form submission
    submitForm.addEventListener("submit", async (event) => {
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

        // Show data object
        const data = {
            showName,
            showDescription,
            showLink,
        };

        // Submit the data to the backend (POST request)
        await submitShow(data);

        // Reset the form after submission
        submitForm.reset();
    });

    // API URL for backend
    const apiUrl = "http://localhost:3000/api/submissions";

    // Fetch submissions from the backend (GET request)
    async function fetchSubmissions() {
        try {
            const response = await fetch(apiUrl);
            const submissions = await response.json();
            console.log(submissions); // Debug: Log the submissions
            renderSubmissions(submissions); // Function to display data
        } catch (error) {
            console.error("Error fetching submissions:", error);
        }
    }

    // Submit a new show to the backend (POST request)
    async function submitShow(data) {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            // Check if submission was successful
            if (response.ok) {
                alert("Submission successful!");
                fetchSubmissions(); // Refresh the list of submissions
            } else {
                const errorData = await response.json();
                alert(`Submission failed: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error submitting show:", error);
        }
    }

    // Render the submissions (this function is just an example; you need to implement it)
    function renderSubmissions(submissions) {
        const submissionList = document.getElementById("submissionList");
        submissionList.innerHTML = ""; // Clear the current list

        // Loop through submissions and display them
        submissions.forEach(submission => {
            const listItem = document.createElement("li");
            listItem.textContent = `${submission.showName}: ${submission.showDescription}`;
            submissionList.appendChild(listItem);
        });
    }

    // Optionally, call fetchSubmissions when the page loads to show existing submissions
    fetchSubmissions();
});
