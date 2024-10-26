async function fetchData() {
    // Replace with your Google Apps Script Web App URL
    const apiUrl = 'https://script.google.com/macros/s/AKfycbw7gUPDlfRSIteHRjG2Oy2CjeSm_TjKZPc_4gycs6sgXY-Bqmp0Qa86FrgW0Un8DtIrug/exec';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const tableBody = document.querySelector('#hoursTable tbody');
        tableBody.innerHTML = ''; // Clear previous data

        data.forEach((entry) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry['Counselor Name']}</td>
                <td>${entry['Date']}</td>
                <td>${entry['Screening Hours']}</td>
                <td>${entry['Interview Hours']}</td>
                <td>${entry['Comments']}</td>
                <td>${entry['Approval Status']}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
