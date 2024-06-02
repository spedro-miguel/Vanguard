const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Acertos', 'Erros'],
      datasets: [{
        label: 'Respostas',
        data: [4, 2]
      }]
    },
    options: {
      resonsive: true,
    }
  });