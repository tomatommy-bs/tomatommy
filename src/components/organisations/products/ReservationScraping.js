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