import React from 'react';
import Card from './Card';
import { Button } from "@mui/material";
import profileLogo512 from "~/assets/static/img/profile-logo512.png";

const SantaQuest = () => {

    return (
        <>
            <Card
                title={"モイ ! サンタクエスト"}
                content={"大学院の授業で作成した、現地訪問型スタンプラリーのWebApp."}
                img={profileLogo512}
                actions={
                    <>
                        <Button href={"https://wsapp.cs.kobe-u.ac.jp/SandaQuest/index"} target={"_brank"}>PLAY</Button>
                        <Button>DETAIL</Button>
                    </>
                }
            ></Card>
        </>
    )
}
export default SantaQuest