import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"

export default () => {
    const Row = ({ isLeft, highlight, children }) => {

        const Separation = () =>
            <>
                <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                    class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
            </>

        const Content = () =>
            highlight ?
                <div className="bg-blue-500 p-4 rounded-xl text-blue-50">
                    {children}
                </div>
                :
                <div className="bg-blue-100 p-4 rounded-xl text-blue-500">
                    {children}
                </div>

        return isLeft ?
            <div class="flex flex-row-reverse md:contents">
                <div class=" col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md">
                    <Content></Content>

                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <Separation></Separation>
                </div>
            </div >
            :
            <div class="flex md:contents">
                <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <Separation></Separation>
                </div>
                <div class="col-start-6 col-end-10 rounded-xl my-4 mr-auto shadow-md">
                    <Content></Content>
                </div>
            </div>
    }

    const Header = ({ children }) => <h3 className="font-semibold text-lg mb-1">{children}</h3>
    const Text = ({ children }) => <p className="leading-tight text-justify">{children}</p>
    const Link = ({ children, to }) => <a className="font-bold bg-blue-200 hover:bg-blue-300 rounded-xl p-1" href={to}>{children}</a>

    return (
        <Layout>
            {/* <!-- component --> */}
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                    <Row isLeft={true} highlight={false}>
                        <Header>2017/04</Header>
                        <Text>神戸大学工学部情報知能工学科 入学</Text>
                    </Row>
                    <Row isLeft={true} highlight={false}>
                        <Header>2020/04</Header>
                        <Text><Link to="https://www.lab.kobe-u.ac.jp/csi-applied-optics/index.html">
                            <FontAwesomeIcon icon={faExternalLinkSquareAlt}></FontAwesomeIcon>システム情報学研究科システム計測研究室</Link>配属
                        </Text>
                    </Row>
                    <Row isLeft={false} highlight={false}>
                        <Header>2020/07</Header>
                        <Text>深層学習を用いた2D画像変換</Text>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}