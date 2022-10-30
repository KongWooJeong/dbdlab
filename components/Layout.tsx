import { ReactNode } from "react";
import styled from "@emotion/styled";

import SideBar from "./SideBar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <LayoutWrapper>
      <aside className="menu-container">
        <SideBar
          menuList={["Dashboard", "Research", "Members", "Insight", "Calendar"]}
        />
      </aside>
      <main className="main-container">{children}</main>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f8f8;

  .menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 252px;
    height: 100%;
  }

  .main-container {
    width: 100%;
    margin-left: 252px;
    padding: 20px;
    overflow-x: hidden;
  }
`;

export default Layout;
