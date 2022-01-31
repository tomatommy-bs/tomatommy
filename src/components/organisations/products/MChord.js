import React from 'react';
import Card from './components/Card';
import TechInfo from "./components/TechInfo";
import ProductDiagram from "./components/ProductDiagram";
import { Button, Tooltip, IconButton, Grid, Typography } from '@mui/material';
import { GitHub, Videocam } from '@mui/icons-material';

const MChord = () => {

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
                        音楽コードはスマホではとても打ちづらく(ex: Fm7#add911)、PCであっても打つのはなかなかに面倒
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        また、音楽理論を勉強する上では'度数表記'が重要になってくるが、入力したコードを度数で表記してくれるツールはほとんどない
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        自分が好きな音楽のコード進行や、自分がよく奏でているコード進行、さらには「好きだな」、って思った進行を応用させるためにも、コード進行を可視化するツールが欲しかった
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        MChordはコード進行の入力を簡単にし、進行を可視化させるツールです(予定)
                    </Typography>

                </Grid>
            </Grid>

        const Tech = () => {

            const contents = [
                { label: "使用技術", content: "Node.js, React, Heroku, Material-UI, TonalJS" },
                { label: "開発期間", content: <>期間 : 2か月 ~<br />人数 : 1人</> },
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
                <Tooltip title="DEMO" placement="top">
                    <IconButton
                        href={"https://mchord.herokuapp.com/"}
                        target={"_blank"}
                    >
                        <Videocam />
                    </IconButton>
                </Tooltip>
                <IconButton
                    href={"https://github.com/oura-hideyoshi/Mchord"}
                    target={"_blank"}
                >
                    <GitHub />
                </IconButton>
            </>
        return (
            <>
                <ProductDiagram
                    title={"MChord"}
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
                title={"MChord(未完成)"}
                content={"音楽コードに関するツールをReactを使って独自開発しています。"}
                actions={
                    <>
                        <Button href={"https://mchord.herokuapp.com/"} target={"_blank"}>PLAY</Button>
                        <Button onClick={handleClickDetailBtn}>DETAIL</Button>
                        <DetailDialog />
                    </>
                }
            >
            </Card>
        </>
    )
}
export default MChord