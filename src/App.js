import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch, Prompt} from 'react-router-dom';
import One from './views/One';
import Two from './views/Two';
import Person from './views/Person';
import NotFound from './views/NotFound';
import Layout from './views/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                {/*<header>*/}
                    {/*<Prompt when={false} message="你确定你真的要离开这个页面么？"></Prompt>*/}
                    {/*<ul>*/}
                        {/*/!*<li><Link to="/">首页</Link></li>*!/*/}
                        {/*/!*<li><Link to="/Two">第二页</Link></li>*!/*/}
                        {/*<li>*/}
                           {/*<Route path='/' exact={true} children={(props) => (*/}
                               {/*<div>*/}
                                   {/*<Link to='/' className={props.match?'active': ''}>首页</Link>*/}
                               {/*</div>*/}
                           {/*)}>*/}
                           {/*</Route>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<Route path='/Two' children={(props) => (*/}
                                {/*<div>*/}
                                    {/*<Link to='/Two' className={props.match?'active': ''}>第二页</Link>*/}
                                {/*</div>*/}
                            {/*)}>*/}
                            {/*</Route>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                {/*</header>*/}
                {/*<hr/>*/}
                <Switch>
                    <Route path='/' exact component={One}></Route>
                    <Route path='/Two' component={Two}></Route>
                    <Route path='/Layout' render={(props) => (
                        <Layout history={props.history}>
                            <Switch>
                                <Route path='/layout' exact component={One}></Route>
                                <Route path='/layout/two' component={Two}></Route>
                            </Switch>
                        </Layout>
                    )}></Route>
                    <Route path='/person/:id' component={Person}></Route>
                    <Route path='/notfound' component={NotFound}></Route>
                    <Route render={() => (
                        <Redirect to='/notfound'></Redirect>
                    )}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
