// src/components/WithNav.js

import React from 'react';
import NavScroll from "../components/NavScroll";
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
    <div>
      <NavScroll />
      <Outlet />
      </div>
    </>
  );
};