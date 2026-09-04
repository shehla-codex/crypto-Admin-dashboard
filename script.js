const chart=document.querySelector("#chart").getContext('2d');

new Chart(chart,{
    type:'line',
    data: {
        labels:['Jan','Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
       
        datasets:[
            {
                label:'BTC',
                data:[29374,33537,49631,59095,57828,36684,33572,39974,48847,48116,61004],
                borderColor:'red',
                borderWidth:2
            },
            {
                label:'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor:'blue',
                borderWidth:2
            },
        ]
    },
    options: {
        responsive:true
    }
})

const donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['BTC', 'ETH', 'EUR', 'Cash'],
        datasets: [{
            data: [42, 28, 18, 12],
            backgroundColor: [
                'rgb(255, 67, 54)',   
                'rgb(71, 7, 234)',   
                'rgb(34, 202, 75)',  
                'rgb(160, 99, 245)'  
            ],
            borderWidth: 0,
            hoverOffset: 6
        }]
    },
    options: {
        cutout: '75%',
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.label}: ${ctx.raw}%`
                }
            }
        }
    }
});

const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');

if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme');
    darkMode.classList.add('active');
    lightMode.classList.remove('active');
}

darkMode.addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    darkMode.classList.add('active');
    lightMode.classList.remove('active');
    localStorage.setItem('theme', 'dark');
});

lightMode.addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
    lightMode.classList.add('active');
    darkMode.classList.remove('active');
    localStorage.setItem('theme', 'light');
});

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.querySelector('main aside');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar-active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-active');
});