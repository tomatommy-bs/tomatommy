import React from 'react';
import * as Pages from "./templates/index";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Router = () => {

    const pageKeys = Object.keys(Pages);
    console.log('Pages', Pages);

    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Pages.Top />} />
                    {pageKeys.map(key => {
                        const Page = Pages[key];
                        return (
                            <Route key={key} path={key} element={<Page />}>
                            </Route>
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router