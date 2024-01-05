import Header  from '../containers/Header';
import { Outlet } from "react-router-dom";

import React from 'react';



function Wrapper() {
  return (
  <>  
<Header/>
<Outlet/>
  </>
  );
}

export default Wrapper;