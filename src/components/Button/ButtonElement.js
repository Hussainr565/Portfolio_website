import styled from "styled-components";
import Button from "@mui/material/Button";

export const NavButton = styled(Button)`
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  height: 50%;
  width: auto;
  top: 20%;
  background-color: #EDEDED;
@media screen and (max-width: 1015px;){
    margin-right: 20px;
}
  @media screen and (max-width: 768px) {
    display: none !important;;
  }
`;
