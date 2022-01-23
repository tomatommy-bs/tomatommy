import React from 'react';
import { githubHomePage, qiitaHomePage, twitterHomePage } from "~/assets/properties/URL";
import { ThemeColor } from "~/assets/Color";
import qiita from "~/assets/static/img/qiita.png";
import { GitHub, Twitter } from '@mui/icons-material';
import { Stack, Link } from "@mui/material";

const AccountIcons = () => {

    return (
        <Stack
            direction={'row'}
            spacing={"10px"}
            justifyContent={"center"}>
            <Link
                href={twitterHomePage}
            >
                <Twitter ></Twitter>
            </Link>
            <Link
                href={githubHomePage}
            >
                <GitHub htmlColor={ThemeColor.black}></GitHub>
            </Link>
            <Link
                href={qiitaHomePage}
            >
                <img
                    src={qiita}
                    width={"24px"}
                ></img>
            </Link>
        </Stack>
    )
}
export default AccountIcons