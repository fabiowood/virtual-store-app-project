import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";


// We can use the CSS library property whenever we want to share the same styles to different elements in a same component:
const HeaderCommonStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 600;
`

// This replaces the 'header' classname:
export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
` 
// This replaces the 'logo-container' classname. Note that 'Link' is an argument, and 'styled' can work as a function, that receives a component as an argument:
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`
// This replaces the 'options' classname:
export const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
// This replaces the 'option' classname, as well as uses a shared component, called HeaderCommonStyles:
export const SingleOptionContainer = styled.div`
  ${ HeaderCommonStyles }
`
// This replaces the 'option' classname, for the Link Component, as well as uses a shared component, called HeaderCommonStyles:
export const LinkOptionContainer = styled(Link)`
  ${ HeaderCommonStyles }
`
