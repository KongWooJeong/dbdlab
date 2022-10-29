import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <LayoutWrapper>
      <aside className="menu-container">네비</aside>
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
    position: relative;
    top: 0;
    left: 252px;
  }
`;

export default Layout;
