import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, Box, Tabs, Tab } from "@mui/material";
import { Close } from '@mui/icons-material';


const ProductDiagram = ({ title, contents, actions, onClose, open }) => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                {...other}
            >
                {value === index && (
                    <>
                        {children}
                    </>
                )}
            </div>
        );
    }

    const contentKeys = Object.keys(contents);

    return (
        <Dialog onClose={onClose} open={open} maxWidth={"lg"} fullWidth>
            <DialogTitle>
                <Typography
                    variant={"h3"}
                    fontSize={"1.5rem"}
                >
                    {title}
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant={"scrollable"} >
                        {contentKeys.map((key) => <Tab key={key} label={contents[key].label} />)}
                    </Tabs>
                </Box>
                <Box height={"min(50vh, 400px)"}>
                    {contentKeys.map((key, idx) =>
                        <TabPanel key={key} value={value} index={idx}>
                            <Typography variant="h6" align="center" gutterBottom sx={{ pt: "1rem" }}>{contents[key].label}</Typography>
                            {contents[key].content}
                        </TabPanel>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>
    )

}
export default ProductDiagram