import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Home from '../../pages/Home/Home'
import Badges from '../../pages/Badges/Badges'
import BadgesCreate from '../../pages/BadgesCreate/BadgesCreate'
import BadgeDetailsContainer from '../../pages/BadgeDetailsContainer/BadgeDetailsContainer'
import BadgeEdit from '../../pages/BadgeEdit/BadgeEdit'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hackspace-badges-firebase/badges" component={Badges}></Route>
        <Layout>
          <Route exact path="/hackspace-badges-firebase/" component={Home}></Route>
          {/* <Route exact path="/badges/badgesCreate" component={BadgesCreate}></Route> */}
          <Route exact path="/hackspace-badges-firebase/badges/create/badgesCreate" component={BadgesCreate}></Route>
          <Route exact path="/hackspace-badges-firebase/badges/:badgeId" component={BadgeDetailsContainer}></Route>
          <Route exact path="/hackspace-badges-firebase/badges/:badgeId/edit" component={BadgeEdit}></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
