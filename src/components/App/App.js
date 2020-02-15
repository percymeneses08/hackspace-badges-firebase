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
        <Route exact path="/badges" component={Badges}></Route>
        <Layout>
          <Route exact path="/" component={Home}></Route>
          {/* <Route exact path="/badges/badgesCreate" component={BadgesCreate}></Route> */}
          <Route exact path="/badges/create/badgesCreate" component={BadgesCreate}></Route>
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}></Route>
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
