import React from 'react';
import { AppBar, Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import { githubName } from "~/assets/properties/Name";
import { ThemeColor } from "~/assets/Color";
import profileLogo128 from "~/assets/static/img/profile-logo128.png";

const Header = () => {

    const LinkTab = ({ href, children }) =>

        <Button>
            <Link
                href={href}
                underline="none"
                color={ThemeColor.mainTextColor}
            >
                {children}
            </Link>
        </Button>

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#ffffffa6",
                    boxShadow: "none",
                    padding: "20px"
                }}
            >
                <Container maxWidth="xl">
                    <img
                        src={profileLogo128}
                        height={"30px"}
                        alt="profile-icon"
                        style={{ verticalAlign: "middle" }}
                    ></img>
                    <Typography
                        variant="h6"
                        noWrap
                        color={ThemeColor.mainTextColor}
                        display={"inline"}
                        sx={{ verticalAlign: "middle" }}
                    >
                        {githubName}
                    </Typography>
                    <LinkTab href="#top">
                        Top
                    </LinkTab>
                    <LinkTab href="#about-me">
                        About Me
                    </LinkTab>
                    <LinkTab href="#skills">
                        Skills
                    </LinkTab>
                    <LinkTab href="#products">
                        products
                    </LinkTab>

                </Container>
            </AppBar>
        </>
    )
}
export default Header