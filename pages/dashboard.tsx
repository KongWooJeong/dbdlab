import styled from "@emotion/styled";
import axios from "axios";

import CovidDaily from "../components/pages/dashboard/CovidDaily";
import CovidAge from "../components/pages/dashboard/CovidAge";
import CovidGender from "../components/pages/dashboard/CovidGender";

interface CovidDayInfo {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}

interface CovidGenAgeInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface Covid19InfStateResponse {
  items: {
    item: CovidDayInfo[];
  };
}

interface Covid19GenAgeCaseInfResponse {
  items: {
    item: CovidGenAgeInfo[];
  };
}

interface Props {
  covidDayInfoList: CovidDayInfo[];
  covidGenAgeInfoList: CovidGenAgeInfo[];
}

function Dashboard({ covidDayInfoList, covidGenAgeInfoList }: Props) {
  return (
    <DashboardWrapper>
      <div className="first-row-container">
        <CovidDaily data={covidDayInfoList} />
      </div>
      <div className="second-row-container">
        <div className="first-column-container">
          <CovidAge data={covidGenAgeInfoList} />
        </div>
        <div className="second-column-container">
          <CovidGender data={covidGenAgeInfoList} />
        </div>
      </div>
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;

  .first-row-container {
    height: 100%;
  }

  .second-row-container {
    display: flex;
    height: 100%;

    .first-column-container {
      width: 50%;
    }

    .second-column-container {
      width: 50%;
    }
  }
`;

export async function getServerSideProps() {
  const covidInfo = await axios.get<Covid19InfStateResponse>(
    "http://localhost:3000/covidData/getCovid19InfState.json"
  );
  const covidGenAgeInfo = await axios.get<Covid19GenAgeCaseInfResponse>(
    "http://localhost:3000/covidData/getCovid19GenAgeCaseInf.json"
  );

  return {
    props: {
      covidDayInfoList: covidInfo.data.items.item,
      covidGenAgeInfoList: covidGenAgeInfo.data.items.item,
    },
  };
}

export default Dashboard;
