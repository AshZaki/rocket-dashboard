import DashboardHeader from "./components/DashboardHeader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faCheckSquare, 
  faGear, 
  faCog, 
  faBuilding, 
  faChevronDown,
  faChevronRight, 
  faCircleQuestion, 
  faBoxArchive,
  faScaleBalanced,
  faCircleUser,
  faMaximize
 } from "@fortawesome/free-solid-svg-icons";
import Content from "./components/Content";


function App() {
  library.add(faCheckSquare, faGear, faCog, faBuilding, faChevronDown, faChevronRight, faCircleQuestion, faBoxArchive, faScaleBalanced, faCircleUser, faMaximize);
  return (
    <>
      <div className="mx-10">
        <DashboardHeader header="SpaceX Mission Dashboard" />
        <Content />
      </div>
      
    </>
  );
}

export default App;
