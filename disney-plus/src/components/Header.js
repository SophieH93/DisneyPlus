import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo>
        <img
          src="/images/logo.svg"
          alt="Disney Logo
        "
        />
      </Logo>
      <NavMenue>Menue</NavMenue>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  background-color: #090b13;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenue = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  padding: 0;
  position: relative;
  margin: 0 auto 0 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
