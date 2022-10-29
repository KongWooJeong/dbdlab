import styled from "@emotion/styled";

function SideBar() {
  return (
    <SideBarWrapper>
      <div className="title-container">
        <span className="title">DBDLAB Corp.</span>
      </div>
      <div className="menu-list-containter">
        <div className="menu">Dashboard</div>
        <div className="menu">Research</div>
        <div className="menu">Members</div>
        <div className="menu">Insight</div>
        <div className="menu">Calendar</div>
      </div>
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 20px;
  box-shadow: 1px 0 7px -5px #000;

  .title-container {
    display: flex;
    justify-content: center;

    .title {
      font-size: 18px;
      font-weight: 700;
    }
  }

  .menu-list-containter {
    margin-top: 55px;

    .menu {
      font-size: 15px;
      padding: 20px 40px;
    }
  }
`;

export default SideBar;
