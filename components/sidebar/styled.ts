import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 100%;
  border-radius: 30px;
  border: 1px solid #565656;
  position: sticky;
  left: 0;
  top: 50px;
  padding: 30px;
  z-index: 10;
  > img {
    width: 100%;
    height: auto;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 46px;
    border-radius: 30px;
    display: block;
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SidebarDes = styled.span`
  max-width: 110px;
  text-align: right;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

export const SidebarEmail = styled.h3`
  font-size: 24px;
  color: #fff;
  text-align: center;
  font-weight: 300;
  margin-bottom: 5px;
`;

export const SidebarAddress = styled.h3`
  font-size: 24px;
  color: #fff;
  text-align: center;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const SidebarCopyright = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 25px;
`;

export const SidebarSocial = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 30px;
  li {
    a {
      display: block;
      width: 50px;
      height: 50px;
      line-height: 46px;
      text-align: center;
      border: 2px solid #565656;
      border-radius: 50%;
      color: #999999;
      font-size: 20px;
      transition: 0.3s;
    }
  }
`;

export const Btn = styled.a`
  background: var(--primary_color);
  color: #000000;
  display: block;
  text-align: center;
  padding: 11px 58px 10px 58px;
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  text-transform: uppercase;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  width: 100%;
  border: 2px solid var(--primary_color);
`;
