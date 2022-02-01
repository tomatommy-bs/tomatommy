import { Box, Container, Divider, Stack } from '@mui/material';
import React from 'react';

const Columns = ({ contents }) => {

    const contetKeys = Object.keys(contents);

    return (
        <Container maxWidth="sm" sx={{ pb: "40px" }}>
            <Stack spacing={5}>
                {contetKeys.map((key) =>
                    <Box key={key}>
                        <Divider sx={{ pb: "1.0rem" }}>{contents[key].label}</Divider>
                        {contents[key].content}
                    </Box>
                )}
            </Stack>
        </Container>
    )
}
export default Columns