import React from 'react';
import Card from './components/Card';
import Columns from "./components/Columns";
import ProductDiagram from "./components/ProductDiagram";
import { Button, Tooltip, IconButton, Grid, Typography, Box, Stack } from '@mui/material';
import { NodeLogo, ReactLogo, MuiLogo, HerokuLogo } from "~/assets/Logo";
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

        const Requirement = () => {
            const contents = [
                {
                    label: "問題", content:
                        <Typography>
                            <ul>
                                <li>音楽コードをスマホで打つ際、記号・数字・英字が混ざるため、非常に打ちづらい。また、PCであっても快適性は低い。</li>
                                <li>テキストで打たれたコードは横並びで見にくい</li>
                                <li>入力したコードを編集する際、スマホでは編集がしづらい</li>
                                <li>あるコード進行が、実は度数が異なる既知のコード進行であることに気づきにくい</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "要件", content:
                        <Typography>
                            <ul>
                                <li>利用者が快適にコード入力ができること</li>
                                <ul>
                                    <li>利用者が、スマホから簡単に音楽コードを入力できること</li>
                                    <li>入力されたコードは形状・色を工夫して見やすいものであること</li>
                                    <li>一度入力されたコードは楽に編集が行えること</li>
                                </ul>
                                <li>コード進行において、コード間の関係を視覚化すること</li>
                                <ul>
                                    <li>異なる進行でも、度数の視点で同じであることがわかること</li>
                                </ul>
                            </ul>
                        </Typography>
                },
                {
                    label: "ターゲット", content:
                        <Typography>
                            <ul>
                                <li>音楽理論を勉強し始め、まだ未熟なもの</li>
                                <li>コード進行を書き留めたいもの</li>
                                <li>コード進行の図を誰かに伝えたいもの</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "解決方針", content:
                        <Typography>
                            <ul>
                                <li>テキスト入力ではなく、ボタンのクリックやDaDといった操作で入力・編集が行えるようにする</li>
                                <li>入力されたコードをノードとし、フローチャート風に表示する</li>
                            </ul>
                        </Typography>
                },
                {
                    label: "実装", content:
                        <>
                            <Typography gutterBottom>
                                Reactを用いてフロントだけで完結させる。ネイティブアプリの方が適するかもしれないが、Reactで作ってみる。場合によってはReactNativeへと移行する。
                            </Typography>
                            <Typography gutterBottom>
                                Reactライブラリを用いてフローチャートを実現させる
                            </Typography>
                        </>
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
                            <NodeLogo /> <ReactLogo /> <HerokuLogo /><MuiLogo />TonalJS
                        </Box>
                },
                { label: "開発期間", content: <>期間 : 2か月 ~<br />人数 : 1人</> },
            ]
            return (
                < Columns contents={contents} />
            )
        }

        const contents = [
            { label: "ABSTRACT", content: <Abstract /> },
            { label: "RECUIREMENT", content: <Requirement /> },
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