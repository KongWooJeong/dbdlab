import styled from "@emotion/styled";

function Dashboard() {
  return (
    <DashboardWrapper>
      <div className="first-row-container">첫번째</div>
      <div className="second-row-container">
        <div className="first-column-container">두번째</div>
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
    height: 50%;
  }

  .second-row-container {
    display: flex;
    height: 50%;

    .first-column-container {
      width: 50%;
      height: 100%;
    }

    .second-column-container {
      width: 50%;
      height: 100%;
    }
  }
`;

export default Dashboard;
