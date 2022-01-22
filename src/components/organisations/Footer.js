import React from 'react';
import { AppBar, Container, Toolbar, Typography, Link, Stack } from "@mui/material";
import { GitHub, Twitter } from '@mui/icons-material';
import { githubHomePage, qiitaHomePage, twitterHomePage } from "~/assets/properties/URL";
import { ThemeColor } from "~/assets/Color";
import qiita from "~/assets/static/img/qiita.png";

const Footer = () => {

    return (
        <>
            <AppBar
                component={"footer"}
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Container maxWidth="xl">
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
            </AppBar>
        </>
    )
}
export default Footer