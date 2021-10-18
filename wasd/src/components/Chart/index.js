import { Chart } from "react-google-charts";

function ChartFuncionario() {
  var dados = []
  for (let i = 0; i < 30; i += 5) {
    dados.push(i)
  }
  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['x', 'dogs'],
        [0, 0],
        [1, 5],
        [2, 15],
        [3, 9],
        [4, 10],
        [5, 5],
        [6, 3],
        [7, 19],
      ]}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Temperatura',
        },
        series: {
          0: { curveType: 'function' },
        },
        legend: {
          display: false,
        }
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  )
}

export default ChartFuncionario;