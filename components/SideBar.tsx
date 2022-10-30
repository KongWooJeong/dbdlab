import { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

interface Props {
  menuList: string[];
}

interface MenuProps {
  isClicked: boolean;
}

function SideBar({ menuList }: Props) {
  const [selectedMenu, setSetSelectdMenu] = useState<string>("Dashboard");

  const router = useRouter();

  function handleMenuItemClick(clickedMenu: string) {
    setSetSelectdMenu(clickedMenu);
    router.push(clickedMenu.toLowerCase());
  }

  return (
    <SideBarWrapper>
      <div className="title-container">
        <span className="title">DBDLAB Corp.</span>
      </div>
      <MenuListContainer>
        {menuList.map((menu) => {
          return (
            <Menu
              key={menu}
              isClicked={selectedMenu === menu}
              onClick={() => handleMenuItemClick(menu)}
            >
              {menu}
            </Menu>
          );
        })}
      </MenuListContainer>
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
`;

const MenuListContainer = styled.div`
  margin-top: 55px;
`;

const Menu = styled.div<MenuProps>`
  margin: 40px;
  font-size: 15px;
  color: ${(props) => (props.isClicked ? "blue" : "black")};
  cursor: pointer;
`;

export default SideBar;
