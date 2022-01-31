import React from 'react';
import Card from './Card';
import profileLogo512 from "~/assets/static/img/profile-logo512.png";
import { Button } from '@mui/material';

const ReservationScraping = () => {

    return (
        <>
            <Card
                title={"スクレイピングシステム"}
                content={"教習所予約システムをスクレイピングし,空き枠があればLINEへ通知するシステム.どこの教習所かは秘密"}
                actions={
                    <>
                        <Button>DETAIL</Button>
                    </>
                }
            >
            </Card>
        </>
    )
}
export default ReservationScraping