import React, { useState } from 'react';
import Card from './components/Card';
import ProductDiagram from "./components/ProductDiagram";
import Columns from './components/Columns';
import { Button, IconButton, Tooltip, Typography, Grid, Box, Stack } from "@mui/material";
import santaquestLogo from "~/assets/static/img/santaquest.png";
import { GithubLogo, JavaLogo, SpringbootLogo, HtmlLogo, CssLogo, MysqlLogo } from "~/assets/Logo";
import { GitHub, Link, Videocam } from '@mui/icons-material';

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
                        実際に現地を訪れることでポイントがたまるクイズラリーアプリ。
                    </Typography>
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

        const Requirement = () => {

            const contents = [
                {
                    label: "問題", content:
                        <Typography>
                            <ul>
                                <li>三田市には魅力的なスポットがあるのに住民がそれに気づけていない</li>
                                <li>運営を行うのは市役所の方々なので、HTMLを直接編集するなどといったことはできない</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "要件", content:
                        <Typography>
                            <ul>
                                <li>ターゲットが三田市の魅力に気づけること</li>
                                <li>ターゲットが三田市に住みたいと感じること</li>
                                <li>サンタ×三田プロジェクトを例年より盛り上げること</li>
                                <li>管理者が簡単に操作できるような管理者画面であること</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "ターゲット", content:
                        <Typography>
                            <ol>
                                <li>三田市民の若年層(~18)</li>
                                <li>三田市民の成人</li>
                                <li>三田市外の人々</li>
                            </ol>
                        </Typography>
                },
                {
                    label: "解決方針", content:
                        <Typography>
                            <ul>
                                <li>
                                    三田市の各観光スポットに実際に足を運ぶきっかけを作る
                                </li>
                                <li>
                                    特に若年層に魅力を知ってもらいたいため、ゲーミフィケーション要素を取り込む
                                </li>
                            </ul>
                        </Typography>
                },
                {
                    label: "実装", content:
                        <>
                            <Typography gutterBottom>
                                GPSを利用し、ユーザーが現地に訪れるとポイントを獲得できる。そのポイントをたまることで、景品に応募することができる。見た目はクリスマス仕様で統一し、利用者に三田市とクリスマスのイメージを結びつける。
                            </Typography>
                            <Typography gutterBottom>
                                管理者画面を用意し、管理者である三田市役所の方が操作することでゲームのマップを作成できるようにする。
                            </Typography>
                        </>
                }
            ]

            return <Columns contents={contents} />

        }

        const Tech = () => {

            const contents = [
                {
                    label: "使用技術", content:
                        <Box display="flex" flexWrap={'wrap'}>
                            <GithubLogo /><JavaLogo /><SpringbootLogo /><HtmlLogo /><CssLogo /><MysqlLogo />{"Tomcat, Apache"}
                        </Box>
                },
                { label: "開発期間", content: <>期間 : 半年<br />人数 : 6人</> },
                { label: "リリース", content: <>期間 : 2021/12/01 ~ (遊べる期間は 2022/01/31)<br />利用者数 : 約300人</> },
                { label: "担当", content: "フロントエンド＆バックエンド" }
            ]
            return (
                < Columns contents={contents} />
            )
        }

        const contents = [
            { label: "ABSTRACT", content: <Abstract /> },
            { label: "REQUIREMENT", content: <Requirement /> },
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