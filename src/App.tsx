import TopNavbar from "./components/navbar";
import Sidenav from "./components/sidenav";
import "./assets/styles/global.css";
import TabsComponent from "./components/Tabs";

function App() {
  return (
    <>
      <TopNavbar />
      <Sidenav />
      <TabsComponent />
    </>
  );
}

export default App;
