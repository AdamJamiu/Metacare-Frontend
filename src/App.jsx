import './App.css'
import TopNavbar from './components/navbar'
import Sidenav from './components/sidenav'
import './assets/styles/global.css';
import chartBoxContainer from './components/chartBox';


function App() {

  return (
    <>
      <TopNavbar />
      <Sidenav />

      <chartBoxContainer />
    </>
  )
}

export default App;
