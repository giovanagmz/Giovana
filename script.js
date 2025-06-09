async function loadUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // Total
  document.getElementById('totalUsers').textContent = users.length;

  // Cidades únicas
  const cities = [...new Set(users.map(user => user.address.city))];
  document.getElementById('uniqueCities').textContent = cities.length;

  // Empresas únicas
  const companies = [...new Set(users.map(user => user.company.name))];
  document.getElementById('uniqueCompanies').textContent = companies.length;

  // Tabela
  const tbody = document.getElementById('userTable');
  users.forEach(user => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.address.city}</td>
      <td>${user.company.name}</td>
    `;
    tbody.appendChild(tr);
  });
}

loadUsers();
