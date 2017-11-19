// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


//Area Chart
var ctx = document.getElementById("waterused");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["19:00", "19:20", "19:45", "19:58", "20:55", "21:31","21:34","21:38","21:45","21:48","21:53",
    "22:01","22:12","22:15","22:18","22:22",'22:32','22:36',"22:40","22:42","22:45","22:48","22:53","22:56","23:00"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,16,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,190,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [80, 100, 120, 140, 160, 180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560],
     }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'time'
        },
        gridLines: {
          display: false
        },
        ticks: {
                  maxTicksLimit: false
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 600,
          maxTicksLimit: 6,
          display:false
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

//Area Chart
var ctx = document.getElementById("waterconserved");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["19:00", "19:20", "19:45", "19:58", "20:55", "21:31","21:34","21:38","21:45","21:48","21:53",
    "22:01","22:12","22:15","22:18","22:22",'22:32','22:36',"22:40","22:42","22:45","22:48","22:53","22:56","23:00"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,200,16,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,200,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,190,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500],}],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'time'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: false
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 2000,
          maxTicksLimit: 6,
          display:false
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});



// -- Bar Chart
var ctx = document.getElementById("ph");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],
    datasets: [{
      label: "Number of liters",
      backgroundColor: "rgba(50,100,21,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [20,32,46,120,365,852,986,970,423,120,84,46,32,6]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'pH values'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: false
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max:2000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

/*
//--bar chart 2
var ctxb = document.getElementById("waterconserved");
var myLineChart = new Chart(ctxb, {
  type: 'bar',
  data: {
    labels: ["19:00", "19:20", "19:45", "19:58", "20:55", "21:31","21:34","21:38","21:45","21:48","21:53",
    "22:01","22:12","22:15","22:18","22:22",'22:32','22:36',"22:40","22:42","22:45","22:48","22:53","22:56","23:00"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(100,200,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [80, 100, 120, 140, 160, 180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,500,520,540,560,600,620,640,660,700],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: false
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 800,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
*/
