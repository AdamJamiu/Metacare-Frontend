import './App.css'
import TopNavbar from './components/navbar'
import Sidenav from './components/sidenav'
import './assets/styles/global.css';
import ChartBoxContainer from "./components/chartBox"


function App() {

  return (
    <>
      <TopNavbar />
      <Sidenav />

      <ChartBoxContainer />
      
    </>
  )
}

export default App;
