import React from 'react';
import * as Pages from "./templates/index";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {

    const pageKeys = Object.keys(Pages);
    console.log('Pages', Pages);

    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={Pages.Top} />
                    {pageKeys.map(key => {
                        const Page = Pages[key];
                        return (
                            <Route key={key} path={"/" + key} component={Page}>
                            </Route>
                        )
                    })}
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router