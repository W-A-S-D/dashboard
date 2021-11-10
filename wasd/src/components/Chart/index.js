import { Chart } from "react-google-charts";

function ChartFuncionario(props) {

  return (
    <Chart
      width={'45vw'}
      height={'33vh'}
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
        colors: ['#422F8A'],
        vAxis: {
          title: props.tipo,
          viewWindow: {
            min: props.min,
            max: props.max
          },
        },
        series: {
          0: { curveType: 'function' },
        }, 
        legend: 'none',
        chartArea: {
          width: '90%'
      },
      }
      }
      rootProps={{ 'data-testid': '2' }}
    />
  )
}

export default ChartFuncionario;