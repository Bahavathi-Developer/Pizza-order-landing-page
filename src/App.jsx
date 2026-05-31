import React from 'react'
import AppNavbar from './component/AppNavbar';
import Banner from './component/Banner';
import Menu from './component/Menu';
import PickoftheWeek from './component/PickoftheWeek';
import Comments from './component/Comments';

function App() {
  return (
    <>
      <AppNavbar />
      <Banner />
      <Menu />
      <PickoftheWeek />
      <Comments />
      <div className="text-center my-3 text-primary small">
        &copy; 2026 Pizza Inc. All rights reserved.
      </div>
    </>
  )
}

export default App;