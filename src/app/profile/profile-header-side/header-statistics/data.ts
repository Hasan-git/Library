export const statistics = {

  comments: "1,425",
  vacations: "13",
  creativity: "13",
  widget2: {
    conversion: {
      value: 492,
      ofTarget: 13
    },
    chartType: 'bar',
    datasets: [
      {
        label: 'Conversion',
        data: [221, 428, 492, 471, 413, 344, 294]
      }
    ],
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    colors: [
      {
        borderColor: '#42a5f5',
        backgroundColor: '#42a5f5'
      }
    ],
    options: {
      spanGaps: false,
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 24,
          left: 16,
          right: 16,
          bottom: 16
        }
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              min: 100,
              max: 500
            }
          }
        ]
      }
    }
  },
  performance: {
    chartType: 'line',
    datasets: [
      {
        label: 'Impression',
        data: [67000, 54000, 82000, 57000, 72000, 57000, 87000, 72000, 89000, 98700, 112000, 136000, 110000, 149000, 98000],
        fill: false
      }
    ],
    labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
    colors: [
      {
        borderColor: '#5c84f1'
      }
    ],
    options: {
      spanGaps: false,
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 2,
          borderWidth: 1,
          hoverRadius: 2,
          hoverBorderWidth: 1
        },
        line: {
          tension: 0
        }
      },
      layout: {
        padding: {
          top: 24,
          left: 16,
          right: 16,
          bottom: 16
        }
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              // min: 100,
              // max: 500
            }
          }
        ]
      }
    }
  },
  followers: {
    chartType: 'line',
    datasets: [
      {
        label: 'Impression',
        data: [67000, 54000, 92000, 67000, 72000, 87000, 97000, 10200, 110000, 120700, 112000, 11000, 100000, 90000, 98000],
        fill: false
      }
    ],
    labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
    colors: [
      {
        borderColor: '#5c84f1'
      }
    ],
    options: {
      spanGaps: false,
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 2,
          borderWidth: 1,
          hoverRadius: 2,
          hoverBorderWidth: 1
        },
        line: {
          tension: 0
        }
      },
      layout: {
        padding: {
          top: 24,
          left: 16,
          right: 16,
          bottom: 16
        }
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              // min: 100,
              // max: 500
            }
          }
        ]
      }
    }
  },
}