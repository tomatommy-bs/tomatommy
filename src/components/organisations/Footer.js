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
                <Container maxWidth="xl" sx={{ display: { xs: "none", sm: "block" } }} >
                    <Toolbar
                        sx={{ gap: "20px" }}
                    >
                        <Typography variant="body1" color="inherit">
                            created by <Link href={githubHomePage} color={"#FFF"}>とまとみ</Link>
                        </Typography>
                        <Stack
                            direction={"row"}
                            spacing={"15px"}
                        >
                            <Link
                                href={twitterHomePage}
                            >
                                <Twitter sx={{ color: "#DDDDDD" }}></Twitter>
                            </Link>
                            <Link
                                href={githubHomePage}
                                color={ThemeColor.black}
                            >
                                <GitHub sx={{ color: "#DDDDDD" }}></GitHub>
                            </Link>
                            <Link
                                href={qiitaHomePage}
                                color={ThemeColor.black}
                            >
                                <img
                                    src={qiita}
                                    width={"24px"}
                                ></img>
                            </Link>
                        </Stack>
                    </Toolbar>
                </Container>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16, display: { xs: "flex", sm: "none" } }}
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