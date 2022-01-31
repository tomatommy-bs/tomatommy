import { Box, Container, Divider, Stack } from '@mui/material';
import React from 'react';

const TechInfo = ({ contents }) => {

    const contetKeys = Object.keys(contents);

    return (
        <Container maxWidth="sm">
            <Stack spacing={5}>
                {contetKeys.map((key) =>
                    <Box key={key}>
                        <Divider sx={{ pb: "1.0rem" }}>{contents[key].label}</Divider>
                        <Stack>
                            {contents[key].content}
                        </Stack>
                    </Box>
                )}
            </Stack>
        </Container>
    )
}
export default TechInfo