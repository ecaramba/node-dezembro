
// $("#grafico1")
const graf1 = document.getElementById("grafico1");

let cores = ["Azul", "Preto", "Verde", "Cinza", "Laranja"];
let quant = [23, 32, 12, 21, 23];

let conf = {
    type: 'bar',
    data: {
        labels: cores,
        datasets:[{
            label: "Venda Janeiro",
            data: [23, 32, 12, 21, 23],
            borderWidth: 1
        },
        {
            label: "Vendas Fevereiro",
            data: [32, 11, 23, 11, 23],
            backgroundColor: "green"
        } 
    ]
    },
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
};

new Chart(graf1, conf);
