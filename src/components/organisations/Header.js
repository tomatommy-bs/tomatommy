import React from 'react';
import { Box, Button, Link, Stack, Tab, Tabs, Typography } from '@mui/material';
import { fullName } from "~/assets/properties/Name";
import { githubHomePage, qiitaHomePage, twitterHomePage } from "~/assets/properties/URL";
import { ThemeColor } from "~/assets/Color";
import qiita from "~/assets/static/img/qiita.png";
import { GitHub, Image, Twitter } from '@mui/icons-material';
import { useHistory, Link as NavLink, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    const isActive = (linkTo) => location.pathname == linkTo ? true : false;

    const LinkTab = ({ linkTo }) =>
        
        <NavLink
            to={"/" + linkTo}
            style={{ textDecoration: "none" }}
        >
            <Button
                sx={{ padding: "10px 20px" }}
            >
                {linkTo}
            </Button>
        </NavLink>


    return (
        <>
            <Box
                component={"header"}>
                <Box
                    height={"270px"}
                    maxWidth={"960px"}
                    margin={"0 auto"}
                    position={"relative"}
                >
                    <Typography
                        variant='h1'
                        position={"absolute"}
                        top={"100px"}
                        fontSize={"2rem"}
                    >
                        {fullName}
                    </Typography>
                    <Stack
                        direction={'row'}
                        top={"100px"}
                        right={"50px"}
                        position={"absolute"}
                        spacing={"10px"}>
                        <Link
                            href={twitterHomePage}
                            color={ThemeColor.black}
                        >
                            <Twitter></Twitter>
                        </Link>
                        <Link
                            href={githubHomePage}
                            color={ThemeColor.black}
                        >
                            <GitHub></GitHub>
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
                    <Stack
                        direction={"row"}
                        spacing={"10px"}
                        sx={{
                            position: "absolute",
                            bottom: "10px",
                            right: "0px"
                        }}
                    >
                        <LinkTab linkTo={"top"}></LinkTab>
                        <LinkTab linkTo={"about"}></LinkTab>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}
export default Header