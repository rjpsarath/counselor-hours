document.getElementById('feedbackForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = {
        counselorName: document.getElementById('counselorName').value,
        date: document.getElementById('date').value,
        screeningHours: document.getElementById('screeningHours').value,
        interviewHours: document.getElementById('interviewHours').value,
        comments: document.getElementById('comments').value,
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw8VzZWHisMl1Hwg2IY--4E6el_7HVDNx7zPJ4KvgDQVd6glNN0eAqhtjkqnQpfT_r9AA/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        document.getElementById('responseMessage').innerText = "Feedback submitted successfully!";
    } catch (error) {
        console.error('Error submitting feedback:', error);
        document.getElementById('responseMessage').innerText = "Error submitting feedback. Please try again.";
    }

    // Reset the form
    document.getElementById('feedbackForm').reset();
});
