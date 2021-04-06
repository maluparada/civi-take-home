document.getElementById('Refresh').addEventListener('click', loadJSON);

function loadJSON() {
  fetch('messages.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = '';
      data.forEach(function (message) {
        html += `
      <li>${message.id} -
       ${employee.timestamp} -
       ${employee.subject} -
       ${employee.detail}
       </li>
      `;
      });
      document.getElementById('result').innerHTML = html;
    });
}
