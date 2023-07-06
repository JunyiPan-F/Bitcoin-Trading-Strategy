// Get the end date input element
const endDateInput = document.getElementById('end-date');

// Set the maximum value of the end date input to the current date
const currentDate = new Date();
const formattedCurrentDate = currentDate.toISOString().split('T')[0];
endDateInput.setAttribute('max', formattedCurrentDate);

// Add event listener to the form submit event
const stockForm = document.getElementById('stock-form');
stockForm.addEventListener('submit', handleFormSubmit);