import React from 'react';
import { githubHomePage, qiitaHomePage, twitterHomePage } from "~/assets/properties/URL";
import { ThemeColor } from "~/assets/Color";
import qiita from "~/assets/static/img/qiita.png";
import { GitHub, Twitter } from '@mui/icons-material';
import { Stack, Link, IconButton } from "@mui/material";

const AccountIcons = () => {

    return (
        <Stack
            direction={'row'}
            spacing={"10px"}
            justifyContent={"center"}>
            <IconButton
                href={twitterHomePage}
                target={"_blank"}
            >
                <Twitter htmlColor='#00acee'></Twitter>
            </IconButton>
            <IconButton
                href={githubHomePage}
                target={"_blank"}
            >
                <GitHub htmlColor={"#000000"}></GitHub>
            </IconButton>
            <IconButton
                href={qiitaHomePage}
                target={"_blank"}
            >
                <img
                    src={qiita}
                    width={"24px"}
                ></img>
            </IconButton>
        </Stack>
    )
}
export default AccountIcons