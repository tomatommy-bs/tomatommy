import React from "react"
import Layout from "../components/layout"
import ReactTooltip from 'react-tooltip'

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
            // TODO
            highlight ?
                <div className="bg-blue-100 p-4 rounded-xl text-blue-500">
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
    const Text = ({ children }) => <p className="leading-tight text-justify my-2">{children}</p>
    const Link = ({ children, to, ...props }) => <a className={"font-bold bg-blue-200 hover:bg-blue-300 rounded-xl p-1"} href={to} {...props}>
        <img className="inline-block mr-1" src="https://img.icons8.com/material-outlined/24/000000/link--v1.png" />{children}</a>
    const GithubLink = ({ children, to, ...props }) => <a className="font-bold bg-blue-200 hover:bg-blue-300 rounded-xl p-1" href={to} {...props}>
        <img className="inline-block mr-1" src="https://img.icons8.com/material-outlined/24/000000/github.png" />{children}</a>
    const OrganizationLink = ({ children, to, ...props }) => <a className="font-bold bg-blue-200 hover:bg-blue-300 rounded-xl p-1" href={to} {...props}>
        <img className="inline-block mr-1" src="https://img.icons8.com/material-outlined/24/000000/organization.png" />{children}</a>
    const RelationLink = ({ children, to, ...props }) => <a className="font-bold bg-blue-200 hover:bg-blue-300 rounded-xl p-1" href={to} {...props}>
        <img className="inline-block mr-1" src="https://img.icons8.com/ios/24/000000/overview-pages-1.png" />{children}</a>
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
                        <Header>2020/03, 04</Header>
                        <Text>神戸大学工学部情報知能工学科 卒業</Text>
                        <Text><Link to="https://www.lab.kobe-u.ac.jp/csi-applied-optics/index.html">
                            神戸大学 システム情報学研究科システム計測研究室</Link>配属
                        </Text>
                    </Row>
                    <Row isLeft={false} highlight={false}>
                        <Header>2020/07</Header>
                        <Text>研究:深層学習を用いた2D画像変換</Text>
                        <Text><GithubLink to="https://github.com/oura-hideyoshi/2D-autoencoder">2D-autoencoder</GithubLink></Text>
                    </Row>
                    <Row isLeft={true} highlight={false}>
                        <Header>2021/03, 04</Header>
                        <Text><Link to="http://www.csi.kobe-u.ac.jp/">
                            神戸大学神戸大学院 システム情報学研究科システム科学専攻</Link>
                        </Text>
                        <Text><Link to="http://www.eng.kobe-u.ac.jp/it-spiral/index.html">
                            ITスペシャリスト養成コース</Link>
                        </Text>
                    </Row>
                    <Row isLeft={false} highlight={false}>
                        <Header>2021/04 ~</Header>
                        <Text>研究:深層学習を用いた3Dイメージ変換</Text>
                        <Text><GithubLink to="https://github.com/oura-hideyoshi/3D-autoencoder">3D-autoencoder</GithubLink></Text>
                        <Text><Link to="http://myosj.or.jp/event2/opt_symp/index.shtml" data-tip="題目 : 深層学習と類似度を用いた３次元蛍光イメージングの再構成像向上" data-for="tooltip-1">2021年 第46回 光学シンポジウム</Link></Text>
                        <ReactTooltip id='tooltip-1' />
                        <Text><Link to="https://confit.atlas.jp/guide/event/lsj42/static/outline?lang=ja" data-tip="題目 : 深層学習を用いたTIE３次元蛍光像の改善" data-for="tooltip-2">一般社団法人レーザー学会学術講演会第42回年次大会</Link></Text>
                        <ReactTooltip id='tooltip-2' />
                    </Row>
                    <Row isLeft={false} highlight={false}>
                        <Header>2021/05</Header>
                        <Text>教習所予約システムのスクレイピング</Text>
                        <Text><GithubLink data-tip="secret" data-for="tooltip-3" >check-reservation</GithubLink></Text>
                        <ReactTooltip id='tooltip-3' />
                    </Row>
                    <Row isLeft={false} highlight={true}>
                        <Header>2021/06 ~ 2021/12</Header>
                        <Text>モイ! SANTA QUEAST!</Text>
                        <Text><GithubLink data-tip="secret" data-for="tooltip-4" >santa-sanda-stamp-rally</GithubLink></Text>
                        <ReactTooltip id='tooltip-4' />
                        <Text><OrganizationLink to="https://github.com/Kobe-Spiral-2021-GroupA">Kobe-Spiral-2021-GroupA</OrganizationLink></Text>
                        <Text><Link to="https://www.city.sanda.lg.jp/citysales/2021-santasanda.html">三田市広報ページ</Link></Text>
                        <Text><Link data-tip="~ 2022/01/31まで" data-for="tooltip-5" to="https://wsapp.cs.kobe-u.ac.jp/SandaQuest/index">ゲームページ</Link></Text>
                        <ReactTooltip id='tooltip-5' />
                        <RelationLink to="">作成中...</RelationLink>
                    </Row>
                    <Row isLeft={false} highlight={true}>
                        <Header>2021/11 ~</Header>
                        <Text>Mchord</Text>
                        <Text><GithubLink to="https://github.com/oura-hideyoshi/Mchord">Mchord</GithubLink></Text>
                        <Text><Link to="https://mchord.herokuapp.com/">DEMO</Link></Text>
                        <RelationLink to="">作成中...</RelationLink>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}