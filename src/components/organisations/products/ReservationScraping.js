import React from 'react';
import Card from './components/Card';
import Columns from "./components/Columns";
import ProductDiagram from "./components/ProductDiagram";
import { Button, Tooltip, IconButton, Grid, Typography, Box, Stack } from '@mui/material';
import { PythonLogo } from "~/assets/Logo";
import { GitHub } from '@mui/icons-material';

const ReservationScraping = () => {

    const [isOpen, setIsOpen] = React.useState(false);
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
                </Grid>
                <Grid item xs={12} sm={6} sx={{ alignSelf: "center" }}>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        私が通っていた教習所の予約システムはいつも混んでおり空き枠が無い。
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        さらにはキャンセル待ちといった機能もなく、ひたすら更新ボタンを手動で押し続けるしかなかった。
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        そこで、Pythonのseleniumを用い、LineNotifyAPIを用いて、空き枠ができるとLINEへ通知するシステムを作成した。
                    </Typography>

                </Grid>
            </Grid>

        const Requirement = () => {
            const contents = [
                {
                    label: "問題", content:
                        <Typography>
                            <ul>
                                <li>教習所の予約は常に混んでおり、空いてもすぐに埋まってしまう</li>
                                <li>予約可能枠ができたことを知る方法はHPを確認し、手動で更新ボタンを押すしかない</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "要件", content:
                        <Typography>
                            <ul>
                                <li>利用者が、予約システムをずっと監視する時間をなくす・軽減すること</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "ターゲット", content:
                        <Typography>
                            <ol>
                                <li>教習所に通っている者(なんとか権的に、私の身の回りの者のみ)</li>
                            </ol>
                        </Typography>
                },
                {
                    label: "解決方針", content:
                        <Typography>
                            <ul>
                                <li>予約可能枠ができたことを、利用者が所持する端末に可能な限り早く知らせる</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "実装", content:
                        <Typography>
                            Pythonのライブラリ、celeniumを用いて予約システムをスクレイピングし、空き枠を検知すると利用者のLINEへと通知を送る。通知にはLINENotifyAPIを用いる。
                        </Typography>
                },
            ];
            return (
                <Columns contents={contents} />
            )
        }

        const Tech = () => {

            const contents = [
                {
                    label: "使用技術", content:
                        <Box display="flex" flexWrap={'wrap'}>
                            <PythonLogo />celenium, LINENotifyAPI
                        </Box>
                },
                { label: "開発期間", content: <>期間 : 2週間<br />人数 : 1人</> },
                { label: "リリース", content: <>期間 : 2021/06 ~<br />利用人数 : 3人</> },
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
                <Tooltip title="This is private repository." placement="top">
                    <IconButton
                        href={"https://github.com/oura-hideyoshi/check-reservation"}
                        target={"_blank"}
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
            </>
        return (
            <>
                <ProductDiagram
                    title={"教習所の予約枠が空いたらLINEに通知するシステム"}
                    contents={contents}
                    actions={<Actions />}
                    onClose={handleClose}
                    open={isOpen}
                ></ProductDiagram>
            </>
        )
    }

    return (
        <>
            <Card
                title={"スクレイピングシステム"}
                content={"教習所予約システムをスクレイピングし,空き枠があればLINEへ通知するシステム.どこの教習所かは秘密"}
                actions={
                    <>
                        <Button onClick={handleClickDetailBtn}>DETAIL</Button>
                        <DetailDialog />
                    </>
                }
            >
            </Card>
        </>
    )
}
export default ReservationScraping