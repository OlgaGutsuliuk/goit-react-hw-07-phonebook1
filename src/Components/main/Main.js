import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';


const Main = () => {
    return (
    <>
      <Suspense fallback={<h2>LOADING....</h2>}>
       <Switch>
        {mainRoutes.map(item => (
          <Route path={item.path} exact={item.exact} component={item.component} key={item.path}/>
        ))}
      </Switch> 
      </Suspense>
    </>
    );
}

export default Main;