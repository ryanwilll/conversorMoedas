var options = {
  chart: {
    type: "area",
    stacked: true,
  },
  colors: ["#7C3AED"],
  stroke: {
    width: 3,
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    labels: {
      datetimeFormatter: {
        year: "yyyy",
        month: "MMM 'yy",
        day: "dd MMM",
        hour: "HH:mm",
      },
    },
  },
  fill: {
    type: "gradient",
    colors: "#7C3AED",
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
