import { React } from 'react';
import { Typography, Stack, } from '@mui/material';
import { NavLink } from 'react-router-dom';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';

function BlockSwitchingInCategory(props) {
    const { forwardProductId, backProductId } = props;

    return (
        <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
            style={{ paddingLeft: 30, paddingRight: 30 }}
            sx={{ height: { xs: '60px', sm: '80px', md: '90px', xl: '110px' }, }}
        >
            <NavLink to={backProductId}
                style={{ textDecoration: 'none', }}
            >
                <Stack variant="contained"
                    component="p"
                    direction="row"
                    alignItems="center"
                >
                    <NavigateBefore
                        style={{
                            background: '#F46D40',
                            color: '#F2F2F2',
                            borderRadius: '50px',
                            height: '20px',
                            width: '20px',
                        }}
                    />
                    <Typography variant="body2"
                        component="span"
                        style={{
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '22px',
                        }}
                        sx={{
                            color: { xs: '#000000' },
                            margin: { xs: '0 0 0 12px', sm: '0 0 0 15px', md: '0 0 0 17px', xl: '0 0 0 18px', },
                        }} >
                        Back
                    </Typography>
                </Stack>
            </NavLink>

            <NavLink to={forwardProductId}
                style={{ textDecoration: 'none', }}
            >
                <Stack variant="contained"
                    component="p"
                    direction="row"
                    alignItems="center"
                >
                    <Typography variant="body2" component="span"
                        style={{
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '22px',
                        }}
                        sx={{
                            color: { xs: '#000000' },
                            margin: { xs: '0 13px 0 0', sm: '0 15px 0 0', md: '0 17px 0 0', xl: '0 19px 0 0', },
                        }} >
                        Forward
                    </Typography>

                    <NavigateNext
                        style={{
                            background: '#F46D40',
                            color: '#F2F2F2',
                            borderRadius: '50px',
                            height: '20px',
                            width: '20px',
                        }}
                    />
                </Stack>
            </NavLink>
        </Stack>
    )
}
export default BlockSwitchingInCategory;
