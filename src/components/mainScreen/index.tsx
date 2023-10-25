import React from 'react';
import Styles from './screenMain.module.scss';
import { Outlet } from 'react-router-dom';

export default function MainScreen() {
  return (
    <div className={Styles.container}>
      <Outlet />
    </div>
  );
}
