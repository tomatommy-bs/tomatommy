import React from 'react';
import Layout from '../organisations/Layout';
import * as ProductsContents from "../organisations/products/index";
import { Heading } from '../atoms';
import { githubHomePage } from "~/assets/properties/URL";
import { AccountIcons } from '../molecules';
import profileLogo512 from "~/assets/static/img/profile-logo512.png";
import { Colors, ThemeColor } from "~/assets/Color";
import { Container, Box, Typography, Stack, Grid, List, ListItem, ListItemIcon, ListItemText, Link } from "@mui/material";
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

const Top = () => {

    const Back = ({ children }) => {
        return (
            <>
                {children.map((child, idx) => {
                    return (
                        <Stack
                            id={child.props.id}
                            key={idx}
                            direction={"row"}
                            alignItems={"center"}
                            bgcolor={idx % 2 == 0 ? ThemeColor.mainBgColor : Colors.white}
                            minHeight={"max(400px, 100vh)"}
                            padding={"20px 0px"}>
                            {child}
                        </Stack>
                    )
                })}
            </>
        )
    }

    const AboutThisPage = () =>
        <>
            <Container
                maxWidth="sm"
            >
                <Stack
                    spacing={"20px"}
                >
                    <Heading>
                        about this page
                    </Heading>
                    <Typography
                        variant='body1'
                        textAlign={"center"}
                    >
                        エンジニア 大浦秀喜(<Link href={githubHomePage} target={"_blank"}>@oura-hideyoshi</Link>) のポートフォリオサイトです。
                        まだまだ駆け出しエンジニアですが、これまでに手がけた制作物、身につけたスキルをまとめています。
                        これからどんどんと充実させていきますので、度々訪問してください。
                    </Typography>
                </Stack>
            </Container>
        </>

    const AboutMe = () => {

        const slogan = [
            "学習力",
            "継続力",
            "実力"
        ]

        return (
            <>
                <Container
                    maxWidth="md"
                >
                    <Heading>
                        about me
                    </Heading>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}
                            textAlign={"center"}
                        >
                            <img
                                src={profileLogo512}
                                width={"50%"}
                            ></img>
                            <AccountIcons />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography variant='body1'>
                                奈良出身。 現在は神戸大学院所属。<br />
                                大学時代からプログラミングを勉強し始め、大学院時代からWebApp開発に触れる。<br />
                                PythonとReact.jsが好き。目指せフルスタックエンジニア<br />
                                広い視点でものを見ることを常に念頭に置く。
                            </Typography>
                            <List>
                                {slogan.map((item, idx) =>
                                    <ListItem key={idx} >
                                        <ListItemIcon>
                                            <CheckCircleOutlineOutlined
                                                htmlColor={ThemeColor.accentColor}
                                            />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography
                                                variant='body1'
                                                fontWeight={"bold"}
                                            >
                                                {item}
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                )}
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }

    const Skills = () => {
        return (
            <Container
                maxWidth={"md"}
            >
                <Heading>
                    Skills
                </Heading>
                <Typography
                    variant={"body1"}
                    textAlign={"center"}
                >
                    editting now ...
                </Typography>
            </Container>
        )
    }
    const Products = () => {
        const SantaQuest = ProductsContents["SantaQuest"];
        const ReservationScraping = ProductsContents["ReservationScraping"];
        const Portfolio = ProductsContents["Portfolio"];
        const MChord = ProductsContents["MChord"];
        return (
            <Container
                maxWidth={"md"}
            >
                <Heading>
                    Products
                </Heading>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <SantaQuest />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <ReservationScraping />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Portfolio />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <MChord />
                    </Grid>
                </Grid>
            </Container>
        )
    }

    return (
        <Layout>
            <Back>
                <AboutThisPage id="top" />
                <AboutMe id="about-me" />
                <Skills id="skills" />
                <Products id="products" />
            </Back>
        </Layout>
    )
}
export default Top