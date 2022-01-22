import React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { fullName } from "~/assets/properties/Name";
import { githubHomePage, qiitaHomePage,twitterHomePage } from "~/assets/properties/URL";
import { ThemeColor } from "~/assets/Color";
import qiita from "../../assets/static/img/qiita.png";
import { GitHub, Image, Twitter } from '@mui/icons-material';

const Header = () => {

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
                </Box>
            </Box>
        </>
    )
}
export default Header