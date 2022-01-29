import React from 'react';
import Layout from '../organisations/Layout';
import { Heading } from '../atoms';
import { AccountIcons } from '../molecules';
import profileLogo512 from "~/assets/static/img/profile-logo512.png";
import { Colors, ThemeColor } from "~/assets/Color";
import { Container, Box, Typography, Stack, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

const Top = () => {

    const Back = ({ children }) => {
        return (
            <>
                {children.map((child, idx) => {
                    return (
                        <>
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
                        </>
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
                        エンジニア 'とまとみ' のポートフォリオサイトです。
                        これまでに手がけた制作物、身につけたスキルをまとめています。
                        どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
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
                                奈良出身。 現在は神戸大学院所属。
                                プログラミングが大好きで、興味をもったものはとにかく勉強。
                                広い視点でものを見ることを常に念頭に置く。
                            </Typography>
                            <List>
                                {slogan.map(item =>
                                    <ListItem >
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
        return (
            <Container
                maxWidth={"md"}
            >
                <Heading>
                    Products
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