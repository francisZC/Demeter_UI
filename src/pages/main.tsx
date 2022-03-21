import React from "react";
import styled from "@emotion/styled";
import { Row, NavMenu } from "components/ui-libs";
import { Nav } from "rsuite";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Home } from "./home";

export const Main = () => {
  return (
    <Container>
      <Router>
        <PageHeader />
        <MainWindow>
          <Routes>
            <Route path={"home"} element={<Home />}></Route>
            <Route path={"blog"}></Route>
            <Route path={"gallery"}></Route>
          </Routes>
        </MainWindow>
      </Router>
      {/* <Routes>
          <Route path={"projects"} element={<ProjectListScreen />} />
          <Route path={"projects/:projectId/*"} element={<ProjectScreen />} />
          <Route index element={<ProjectListScreen />} />
        </Routes> */}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const PageHeader = () => {
  return (
    <Header between={true}>
      <HeaderLeft>logo</HeaderLeft>
      <HeaderNav>
        <NavMenu>
          <Link to="/home">HOME</Link>
          <Link to="blog">BLOG</Link>
          <Link to="./gallery">GALLERY</Link>
          <Link to="./about">ABOUT</Link>
        </NavMenu>
      </HeaderNav>
      <HeaderRight>user</HeaderRight>
    </Header>
  );
};

const Header = styled(Row)`
  padding: 1.2rem;
  font-size: 1.6rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const HeaderNav = styled(Row)``;
const MainWindow = styled.div`
  display: flex;
  overflow: hidden;
`;
