import { React } from 'react';
import { Typography, Stack } from '@mui/material';

function BlockCompound(props) {
    const { contains, ingredients, categories } = props;

    if (categories !== 'drinks') {
        return (
            <Stack
                direction="column"
                justifyContent="center"
                spacing={1}
                sx={{
                    margin: { xs: '16px 0 5px 0' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                }}
            >
                <Typography
                    variant="h6"
                    component="h6"
                    sm={{
                        fontWeight: '500',
                        fontSize: '18px',
                        lineHeight: '22px',
                        margin: '26px 0 5px 0',
                    }}
                    sx={{
                        margin: { xs: '0 0 5px 0', md: '26px 0 5px 0' },
                        textAlign: { xs: 'center', md: 'start' },
                        color: { xs: '#111111' },
                    }} >
                    Compound:
                </Typography>

                <Typography variant="body2" component="p"
                    sx={{
                        fontWeight: '300',
                        fontSize: '18px',
                        lineHeight: '22px',
                        textAlign: { xs: 'center', md: 'start' },
                        color: { xs: '#111111' },
                    }} >
                    {ingredients || (contains ? contains.join(", ") : "")}
                </Typography>
            </Stack>

        );
    }
}
export default BlockCompound;
