import Image from 'next/image'
import { Button, Dialog, styled } from '@mui/material'

export const StyledDialog = styled(Dialog)(() => ({
    '.MuiPaper-root': {
        width: 400,
        borderRadius: 8,
        section: {
            padding: 20,
        },
    },
}))

export const NFTAsset = styled(Image)(() => ({
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
}))

export const BuyButton = styled(Button)(({ theme }) => ({
    width: 160,
    padding: '10px 25px',
    color: theme.palette.white.dark,
    fontSize: 14,
}))
