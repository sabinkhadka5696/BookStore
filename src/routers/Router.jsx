import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Shared/Layout";
import Home from "../Components/Shared/Home";
import Products from "../Components/Pages/Products/Products";
import Contact from "../Components/Pages/Contact/Contact";
import Teams from "../Components/Pages/Our teams/Teams";
import Blog from "../Components/Pages/Bolg/Blog";
import SingleBlog from "../Components/Pages/Bolg/SingleBlog";
import SingleProduct from "../Components/Pages/Products/SingleProduct";

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="teams"
          element={
            <Layout>
              <Teams />
            </Layout>
          }
        />
        <Route
          path="blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="singleblog"
          element={
            <Layout>
              <SingleBlog />
            </Layout>
          }
        />
        <Route
          path="singleproduct"
          element={
            <Layout>
              <SingleProduct />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
