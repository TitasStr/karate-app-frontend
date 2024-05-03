import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Layout from 'src/common/Layout/PublicLayout/Layout';
import { SignUpSectionType } from '../../pages/Public/SignUpPage/SignUpPage';

const SignUpPage = React.lazy(
  () => import('../../pages/Public/SignUpPage/SignUpPage'),
);

const HomePage = React.lazy(
  () => import('../../pages/Public/HomePage/HomePage'),
);

export const Router = () => {
  const getRoutes = () => {
    return (
      <>
        <Route path={routes.homepage} element={<HomePage />} />
        <Route
          path={routes.login}
          element={<SignUpPage sectionType={SignUpSectionType.LOGIN} />}
        />
      </>
    );
  };

  return (
    <BrowserRouter basename="/">
      <Suspense>
        <Layout>
          <Routes>{getRoutes()}</Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};
