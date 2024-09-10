import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import Title from '../../../ui/title';

interface DarkModeProps {
  darkMode: boolean;
}

export function DonutChart({ darkMode }: DarkModeProps) {
  // Definindo o tipo para as opções do gráfico
  const options: ApexOptions = {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Desktop", "Tablet", "Mobile"],
    colors: ["#0f7594", "#0f9421", "#47bafd"],
    legend: {
      position: "bottom",
      labels: {
        colors: darkMode ? "#dddddd" : "#000000",
      },
    },
    dataLabels: {
      style: {
        colors: ["#dddddd"],
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series: number[] = [44, 55, 41];

  return (
    <div className="py-6 bg-white rounded-lg p-5 flex dark:bg-gray-600 items-start justify-center flex-col">
      <Title>Acessos</Title>
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
}
