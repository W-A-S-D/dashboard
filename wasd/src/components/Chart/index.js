import { Chart } from "react-google-charts";

function ChartFuncionario(props) {

  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['x', props.titulo],
        [0, Math.random() * 20],
        [1, Math.random() * 20],
        [2, Math.random() * 20],
        [3, Math.random() * 20],
        [4, Math.random() * 20],
        [5, Math.random() * 20],
        [6, Math.random() * 20],
        [7, Math.random() * 20],
      ]}
      options={{
        hAxis: {
          title: 'Horário',
        },
        vAxis: {
          title: props.tipo,
          viewWindow: {
            min: props.min,
            max: props.max
          }
        },
        series: {
          0: { curveType: 'function' },
        },
        legend: {
          display: false,
        }
      }
      }
      rootProps={{ 'data-testid': '2' }}
    />
  )
}

export default ChartFuncionario;