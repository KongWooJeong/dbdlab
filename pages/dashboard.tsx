import styled from "@emotion/styled";
import axios from "axios";

import CovidAge from "../components/pages/dashboard/CovidAge";

interface CovidDayInfo {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}

interface Props {
  covidDayInfo: CovidDayInfo[];
}

function Dashboard({ covidDayInfo }: Props) {
  return (
    <DashboardWrapper>
      <div className="first-row-container">
        <CovidAge data={covidDayInfo} />
      </div>
      <div className="second-row-container">
        <div className="first-column-container">두번쨰</div>
        <div className="second-column-container">세번째</div>
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
  const { data } = await axios.get(
    "http://localhost:3000/covidData/getCovid19InfState.json"
  );

  return {
    props: {
      covidDayInfo: data.items.item,
    },
  };
}

export default Dashboard;
