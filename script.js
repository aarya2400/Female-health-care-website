document.getElementById('periodForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    // Calculate next cycle
    const nextCycleDate = new Date(year, month - 1, day + 28); // Assuming 28 days cycle
  
    // Format next cycle date
    const nextCycleFormatted = `${nextCycleDate.getDate()}/${nextCycleDate.getMonth() + 1}/${nextCycleDate.getFullYear()}`;
  
    // Display result
    document.getElementById('predictionResult').innerHTML = `Next cycle: ${nextCycleFormatted}`;
  });
  