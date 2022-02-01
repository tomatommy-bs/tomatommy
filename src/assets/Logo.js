import React from 'react';
import react from "./static/logo/react.png";
import mui from "./static/logo/mui.png";
import node from "./static/logo/node.png";
import github from "./static/logo/github.png";
import springboot from "./static/logo/springboot.png";
import html from "./static/logo/html.png";
import css from "./static/logo/css.png";
import java from "./static/logo/java.png";
import mysql from "./static/logo/mysql.png";
import python from "./static/logo/python.png";
import heroku from "./static/logo/heroku.png";


const defaultLogoHeightPx = 28;
const Logo = ({ src, ...style }) => <img src={src} height={style.height == undefined ? defaultLogoHeightPx : style.height} {...style} />

const ReactLogo = () => <Logo src={react} />
const MuiLogo = () => <Logo src={mui} />
const NodeLogo = () => <Logo src={node} />

const GithubLogo = () => <Logo src={github} />

const JavaLogo = () => <Logo src={java} />
const PythonLogo = () => <Logo src={python} />
const SpringbootLogo = () => <Logo src={springboot} />

const HtmlLogo = () => <Logo src={html} />
const CssLogo = () => <Logo src={css} />

const MysqlLogo = () => <Logo src={mysql} />

const HerokuLogo = () => <Logo src={heroku} />



export { ReactLogo, MuiLogo, NodeLogo, GithubLogo, JavaLogo, PythonLogo, SpringbootLogo, HtmlLogo, CssLogo, MysqlLogo, HerokuLogo };