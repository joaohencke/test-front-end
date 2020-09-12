import React from 'react';
import { renderRoutes } from 'react-router-config';
import propTypes from 'prop-types';

export default function Root({ route }) {
  return (
    <div>
      <main>{renderRoutes(route.routes)}</main>
    </div>
  );
}

Root.propTypes = {
  route: propTypes.any.isRequired,
};
