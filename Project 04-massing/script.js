const fetchButton = document.getElementById('fetchButton');
const dataContainer = document.getElementById('dataContainer');

fetchButton.addEventListener('click', () => {
  fetchData()
    .then(data => {
      dataContainer.innerHTML = `
        <h2>Data from the Backend:</h2>
        <ul>
          ${data.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      dataContainer.innerHTML = 'Failed to fetch data.';
    });
});

function fetchData() {
  return fetch('https://api.example.com/data') // Replace with your backend API endpoint
    .then(response => response.json())
    .catch(error => {
      throw new Error('Error fetching data');
    });
}