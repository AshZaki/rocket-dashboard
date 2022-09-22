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
  faMaximize,
  faArrowUp,
  faArrowDown,
 } from "@fortawesome/free-solid-svg-icons";
import Content from "./components/Content";
import { useQuery, gql } from "@apollo/client";

const LAUNCH_DETAILS_QUERY = gql`
  query LAUNCH_DETAILS_QUERY {
    launches {
      id
      mission_id
      mission_name
      launch_site {
        site_name
      }
      launch_success
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;

const PAYLOADS_QUERY = gql`
  query PAYLOADS_QUERY {
    payloads {
      id
      payload_mass_kg
      nationality
      customers
    }
  }
`;

export interface LaunchDetails {
  id: string;
  mission_name: string;
  mission_id: string[];
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
  launch_site: {
    site_id: string;
    site_name: string;
  };
  launch_success: boolean;
}

export interface PayloadDetails {
  id: string;
  payload_mass_kg: number;
  nationality: string;
  customers: string[];
}

function App() {
  library.add(faCheckSquare, faGear, faCog, faBuilding, faChevronDown, faChevronRight, faCircleQuestion, faBoxArchive, faScaleBalanced, faCircleUser, faMaximize, faArrowDown, faArrowUp);
  
  const launchDetailsQuery = useQuery(LAUNCH_DETAILS_QUERY);
  const payloadsQuery = useQuery(PAYLOADS_QUERY);

  if (
    launchDetailsQuery.loading || launchDetailsQuery.error ||
    payloadsQuery.loading || payloadsQuery.error
    ) {
      return null;
  };

  const { launches: launches = [] as LaunchDetails[] } = launchDetailsQuery.data;
  const { payloads: payloads = [] as PayloadDetails[] } = payloadsQuery.data;
  
  return (
      <div className="mx-10 h-full">
        <DashboardHeader header="SpaceX Mission Dashboard" />
        <Content 
          launchDetails={launches}
          payloadDetails={payloads}
        />
      </div>
  );
}

export default App;
