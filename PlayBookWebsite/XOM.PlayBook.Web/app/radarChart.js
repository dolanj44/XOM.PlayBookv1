//line chart data
var lineData = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [{
        fillColor: "rgba(255,255,255,0)",
        strokeColor: "rgba(63,169,245,1)",
        pointColor: "rgba(63,169,245,1)",
        pointStrokeColor: "#fff",
        data: [65, 59, 90, 81, 56, 55, 40]
    }, {
        fillColor: "rgba(255,255,255,0)",
        strokeColor: "rgba(102,45,145,1)",
        pointColor: "rgba(102,45,145,1)",
        pointStrokeColor: "#fff",
        data: [28, 48, 40, 19, 96, 27, 100]
    }]
}

var lineOptions = {
    animation: true,
    pointDot: true,
    scaleOverride: true,
    scaleShowGridLines: false,
    scaleShowLabels: true,
    scaleSteps: 4,
    scaleStepWidth: 25,
    scaleStartValue: 25,
};


function createChart() {

    //radar chart data
    var radarData = {
        labels: ["CI", "Automated Testing", "IaC", "Continuous Delivery", "Continuous Deployment", "Continuous Monitoring"],
        datasets: [
            {
                label: "ChemApps 11-01-2016",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 10, 0, 81, 35, 5]
            },
            {
                label: "ChemApps 3-01-2017",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [75, 35, 0, 19, 45, 5]
            }
        ]
    }

    //Create Radar chart
    var ctx2 = document.getElementById("radarChart").getContext('2d');
    var myRadarChart = new Chart(ctx2, {
        type: 'radar',
        data: radarData,
        options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

}

