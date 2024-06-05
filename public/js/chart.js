const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Acertos', 'Erros'],
      datasets: [{
        label: 'Respostas',
        backgroundColor: ['#1b77f3', '#a11114'],
        data: [4, 2]
      }]
    },
    options: {
      resonsive: true,
    }
  });