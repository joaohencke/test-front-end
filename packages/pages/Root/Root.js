import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header, Footer } from '@seven/components';
import propTypes from 'prop-types';

export default function Root({ route }) {
  return (
    <div>
      <Header />
      <main>{renderRoutes(route.routes)}</main>
      <Footer />
    </div>
  );
}

Root.propTypes = {
  route: propTypes.any.isRequired,
};
