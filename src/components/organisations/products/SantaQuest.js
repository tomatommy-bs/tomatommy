import React, { useState } from 'react';
import Card from './Card';
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

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <>
                        {children}
                    </>
                )}
            </div>
        );
    }

    const DetailDialog = () => {

        const [value, setValue] = React.useState(0);
        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        return (
            <>
                <Dialog onClose={handleClose} open={isOpen} maxWidth={"lg"} fullWidth>
                    <DialogTitle>
                        <Typography
                            variant={"h5"}
                        >
                            モイ ! サンタクエスト
                        </Typography>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                // color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <Close />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="ABSTRACT" />
                                <Tab label="TECHS" />
                            </Tabs>
                        </Box>
                        <Box height={"min(50vh, 400px)"}>
                            <TabPanel value={value} index={0}>
                                <Typography variant="h6" align="center" gutterBottom sx={{ pt: "1rem" }}>ABSTRACT</Typography>
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
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Typography variant="h6" align="center" gutterBottom sx={{ pt: "1rem" }}>TECHS</Typography>
                                <Container maxWidth="sm">
                                    <Stack spacing={5}>
                                        <Box>
                                            <Divider sx={{ pb: "1.0rem" }}>使用技術</Divider>
                                            <Stack>
                                                GitHub,SpringBoot+Thymeleaf,Tomcat,HTML,CSS,JS,MySQL,Apache
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <Divider sx={{ pb: "1.0rem" }}>開発過程</Divider>
                                            期間 : 半年<br />
                                            人数 : 6人
                                        </Box>
                                        <Box>
                                            <Divider sx={{ pb: "1.0rem" }}>担当</Divider>
                                            フロントエンド＆バックエンド
                                        </Box>
                                    </Stack>
                                </Container>
                            </TabPanel>
                        </Box>
                    </DialogContent>
                    <DialogActions>
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
                    </DialogActions>
                </Dialog>
            </>
        )
    }
    return (
        <>
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
        </>
    )
}
export default SantaQuest