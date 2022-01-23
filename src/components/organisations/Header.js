import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { githubName } from "~/assets/properties/Name";
import { AccountIcons } from "../molecules"
import { Link as NavLink } from "react-router-dom";

const Header = () => {

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
                        {githubName}
                    </Typography>
                    <Box
                        top={"100px"}
                        right={"50px"}
                        position={"absolute"}>
                        <AccountIcons />
                    </Box>

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