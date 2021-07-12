<script lang="ts">	

import Chart, { ChartDataSets, ChartRectangleOptions } from 'chart.js';
import Push from 'push.js';

import {onMount} from 'svelte';

// // Create WebSocket connection.
// const socket = new WebSocket('ws://localhost:8765');

// // Connection opened
// socket.addEventListener('open', function (event) {
//     console.log('Socket connected to Server!');
// });

// // Listen for messages
// socket.addEventListener('message', function (event) {
//     console.log('Message from server ', event.data);
//     stockPrice = event.data;
//     addData(myChart, event.data);
// });

// let getPrice = () => {
//     socket.send('GME');
// }

let myChart: Chart;
let fullStockName = 'GameStop Inc';
let stockSymbol = 'GME';
let stockPrice: number  = 0;
function createChart() {
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '', // 'Price'
                fill: false,
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(22, 170, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
		options: {
			responsive: true,
			title: {
				display: false,
				text: fullStockName
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: false,
					scaleLabel: {
						display: true,							labelString: 'Month'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,							labelString: 'Value'
					}
				}]
			}
		}
	});
}
onMount(createChart);

function addData(chart: Chart, newStockPrice: number) {
    chart = myChart;
    stockPrice  = parseFloat((Math.random() * 25).toFixed(2));
    // stockPrice = newStockPrice;
    let openPrice: number = Number(chart.data.datasets[0].data[0]);
    if (openPrice >0 && stockPrice < openPrice) {
        chart.data.datasets[0].borderColor[0] = 'rgba(173, 0, 0, 1)';
    } else {
        chart.data.datasets[0].borderColor[0] = 'rgba(22, 170, 0, 1)';
    }
    if (notifyThreshold > 0 && stockPrice <= notifyThreshold) {
        let notificationBody: string = "GME hit $"+notifyThreshold+" on " + new Date().toLocaleString();
        
        Push.create("StockMe Notification", {
            body: notificationBody,
            icon: 'images/pika32x32icon.png',
            timeout: 3000,
            onClick: function () {
                window.focus();
                this.close();
            }
        });
        NotifyAudio.play()
    }

    let label = new Date().toLocaleString();
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(stockPrice);
    });
    chart.update();
}
setInterval(addData, 2000);

let notifyThreshold: Number;
let notifiedText: string = "Notify me at $5";
let NotifyAudio = new Audio('audio/eventuallyNotifSFX.mp3');


</script>


<div class="justify-center flex items-baseline">
  <p class="text-lg font-bold">{fullStockName}</p> 
  <p class="mx-2">|</p> 
  <p class="text-sm text-gray-400">{stockSymbol}</p>
</div>

<div class="text-4xl p-4 flex justify-center">${stockPrice}</div>

<div class="">
    <canvas id="myChart" class="justify-end"></canvas>
</div>

<br/>

<div class="justify-center my-0 select-none flex">
  <button class="py-2 px-4 shadow-inner no-underline rounded-full bg-blue-600 text-white font-sans font-semibold text-sm border-blue-600 btn-primary hover:text-gray-300 hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Primary</button>
  <button class="py-2 px-4 shadow-md no-underline rounded-full bg-yellow-600 text-white font-sans font-semibold text-sm border-yellow-600 btn-primary hover:text-gray-300 hover:bg-yellow-light focus:outline-none active:shadow-none mr-2">Alert</button>
  <button class="py-2 px-4 shadow-md no-underline rounded-full bg-red-600 text-white font-sans font-semibold text-sm border-red-600 btn-primary hover:text-gray-300 hover:bg-red-light focus:outline-none active:shadow-none mr-2">Danger</button>	
  <button on:click={()=>{notifyThreshold = 5; notifiedText = 'Notified';}}>
    {notifiedText}
  </button>
  <button class="rounded-full bg-green-600">
    Search for GME price
  </button> 
   <!-- <button on:click={addData} class="rounded-full bg-green-600">
    Search for GME price
  </button> -->
</div>



<style>
    #myChart {
        display:flex; 
    }
</style>