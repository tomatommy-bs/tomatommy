import React from 'react';
import { AppBar, Container, Toolbar, Typography, Link, Stack, SpeedDial, SpeedDialAction, SpeedDialIcon, Box } from "@mui/material";
import { GitHub, Twitter } from '@mui/icons-material';
import { githubHomePage, qiitaHomePage, twitterHomePage } from "~/assets/properties/URL";
import { ThemeColor } from "~/assets/Color";
import qiita from "~/assets/static/img/qiita.png";

const Footer = () => {

    const actions = [
        { icon: <GitHub />, name: 'GitHub', url: githubHomePage },
        { icon: <Twitter />, name: 'Twitter', url: twitterHomePage },
        { icon: <img src={qiita} width={"28px"} />, name: "Qiita", url: qiitaHomePage }
    ];

    return (
        <>
            <AppBar
                component={"footer"}
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0, }}
            >
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => window.open(action.url)}
                        />
                    ))}
                </SpeedDial>
            </AppBar>
        </>
    )
}
export default Footer