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
      <NavMenue>
        <a href="/home">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
      </NavMenue>
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

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  //   @media (max-width: 768px) {
  //     display: none;
  //   }
`;

export default Header;
