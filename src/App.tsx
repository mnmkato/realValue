import './App.css'
import Plot from './Plot'

function App() {
  const plots = [
    {
      location:"Sseganga",
      size:"50ft*50ft",
      initialValue: 4000000,
      aqusitionDate: new Date('2022-04-01T00:00:00'),
  },
  {
      location:"Busula",
      size:"0.25 acre",
      initialValue: 5500000,
      aqusitionDate: new Date('2023-07-01T00:00:00')
    },
    {
      location:"Busula",
      size:"0.125 acre",
      initialValue: 3600000,
      aqusitionDate: new Date('2024-03-01T00:00:00')
      }
  ]
  return (
    <>
    {plots.map((plot)=> (
      <Plot plot_item={plot}/>
    ))}
    </>
  )
}

export default App
