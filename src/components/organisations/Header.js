import React from 'react';
import { AppBar, Box, Button, Container, Drawer, Link, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { githubName } from "~/assets/properties/Name";
import { ThemeColor } from "~/assets/Color";
import profileLogo128 from "~/assets/static/img/profile-logo128.png";
import { Menu as IconMenu } from '@mui/icons-material';

const Header = () => {

    const links = [
        { href: "#top", content: "Top" },
        { href: "#about-me", content: "About me" },
        { href: "#skills", content: "Skills" },
        { href: "#products", content: "Products" },
    ]

    const LinkTab = ({ href, children }) => {

        return (
            <Button>
                <Link
                    href={href}
                    underline="none"
                    color={ThemeColor.mainTextColor}
                >
                    {children}
                </Link>
            </Button>
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
                                <ListItem key={link.href}>
                                    <LinkTab href={link.href}>
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
                                <LinkTab key={link.href} href={link.href}>
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