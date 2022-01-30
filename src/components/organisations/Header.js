import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { githubName } from "~/assets/properties/Name";
import { ThemeColor } from "~/assets/Color";
import profileLogo128 from "~/assets/static/img/profile-logo128.png";
import { Menu as IconMenu } from '@mui/icons-material';
import "./Header.css";

const Header = () => {

    const links = [
        { to: "top", content: "Top" },
        { to: "about-me", content: "About me" },
        { to: "skills", content: "Skills" },
        { to: "products", content: "Products" },
    ]

    const LinkTab = ({ to, children }) => {

        return (
            <Button>
                <Link
                    className="page-link"
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={10}
                    style={{ color: ThemeColor.mainTextColor }}
                    onClick={() => document.querySelector('#' + to).scrollIntoView({ behavior: 'smooth' })}
                >
                    {children}
                </Link>
            </Button >
        )
    }

    const LinkDrawer = () => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>
                    <IconMenu />
                </Button>
                <Drawer
                    anchor={"right"}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <Box
                        sx={{ width: "auto" }}
                        role="presentation"
                    >
                        <List>
                            {links.map((link) => (
                                <ListItem key={link.to}>
                                    <LinkTab to={link.to}>
                                        {link.content}
                                    </LinkTab>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </>
        )
    }

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#ffffffa6",
                    boxShadow: "none",
                    padding: "20px"
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Box>
                        <img
                            src={profileLogo128}
                            height={"30px"}
                            alt="profile-icon"
                            style={{ verticalAlign: "middle" }}
                        ></img>
                        <Typography
                            variant="h6"
                            noWrap
                            color={ThemeColor.mainTextColor}
                            display={"inline"}
                            sx={{ verticalAlign: "middle" }}
                        >
                            {githubName}
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            component="div"
                            sx={{ display: { xs: "none", sm: "inline-block" } }}
                        >
                            {links.map((link) =>
                                <LinkTab key={link.to} to={link.to}>
                                    {link.content}
                                </LinkTab>
                            )}
                        </Box>
                        <Box
                            component="div"
                            sx={{ display: { xs: "inline-Block", sm: "none" } }}
                        >
                            <LinkDrawer />
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </>
    )
}
export default Header