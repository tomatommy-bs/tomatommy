import React, { useState } from 'react';
import Card from './components/Card';
import ProductDiagram from "./components/ProductDiagram";
import TechInfo from './components/TechInfo';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip, Typography, Grid, Box, Tabs, Tab, Stack, Divider, Container } from "@mui/material";
import santaquestLogo from "~/assets/static/img/santaquest.png";
import { Close, GitHub, Link, Videocam } from '@mui/icons-material';

const SantaQuest = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClickDetailBtn = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

    const DetailDialog = () => {

        const Abstract = () =>
            <Grid container spacing={2} columns={{ xs: 12, sm: 12 }}>
                <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
                    <img src={santaquestLogo} style={{ width: "min(100%, 300px)" }} ></img>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ alignSelf: "center" }}>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        大学院の授業として、兵庫県三田市様よりクリスマスイベント用のWebAppの作成を受託し、約半年かけて６人のチームで開発
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        初めてWebAppに触れた作品になり、実装方法が粗いところが見受けられるが、約300人の方に利用していただき、三田市の方々からは満足の声を頂いた。
                    </Typography>
                </Grid>
            </Grid>

        const Tech = () => {

            const contents = [
                { label: "使用技術", content: <Typography>GitHub, SpringBoot+Thymeleaf, Tomcat, HTML, CSS, JS, MySQL, Apache</Typography> },
                { label: "開発期間", content: <>期間 : 半年<br />人数 : 6人</> },
                { label: "リリース", content: <>期間 : 2021/12/01 ~ (遊べる期間は 2022/01/31)<br />利用者数 : 約300人</> },
                { label: "担当", content: "フロントエンド＆バックエンド" }
            ]
            return (
                < TechInfo contents={contents} />
            )
        }

        const contents = [
            { label: "ABSTRACT", content: <Abstract /> },
            { label: "TECHS", content: <Tech /> }
        ]
        const Actions = () =>
            <>
                <IconButton
                    href={"https://wsapp.cs.kobe-u.ac.jp/SandaQuest/index"}
                    target={"_blank"}
                >
                    <Videocam />
                </IconButton>

                <Tooltip title="This is private repository." placement="top">
                    <IconButton
                        href={"https://github.com/Kobe-Spiral-2021-GroupA/santa-sanda-stamp-rally"}
                        target={"_blank"}
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
                <Tooltip title="兵庫県三田市 令和3年度 サンタx三田プロジェクト イベントページ" placement="top">
                    <IconButton
                        href={"https://www.city.sanda.lg.jp/citysales/2021-santasanda.html"}
                        target={"_blank"}
                    >
                        <Link />
                    </IconButton>
                </Tooltip>
            </>
        return (
            <>
                <ProductDiagram
                    title={"モイ ! サンタクエスト"}
                    contents={contents}
                    actions={<Actions />}
                    onClose={handleClose}
                    open={isOpen}
                ></ProductDiagram>
            </>
        )
    }

    return (
        <Card
            title={"モイ ! サンタクエスト"}
            content={"大学院の授業で作成した、現地訪問型スタンプラリーのWebApp."}
            img={santaquestLogo}
            actions={
                <>
                    <Tooltip title="期限: ~ 2022/1/31" placement="top" >
                        <Button href={"https://wsapp.cs.kobe-u.ac.jp/SandaQuest/index"} target={"_brank"}>PLAY</Button>
                    </Tooltip>
                    <Button onClick={handleClickDetailBtn}>DETAIL</Button>
                    <DetailDialog />
                </>
            }
        ></Card>
    )
}
export default SantaQuest