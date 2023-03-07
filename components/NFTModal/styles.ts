import Image from 'next/image'
import { Button, Dialog, styled } from '@mui/material'

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '.MuiPaper-root': {
        width: 322,
        borderRadius: 8,
        border: `1px solid ${theme.palette.green.dark}`,
        background: theme.palette.gray.light,
        section: {
            padding: 20,
            a: {
                textDecoration: 'none',
                color: theme.palette.yellow.dark,
            },
            '& h1, h4': {
                whiteSpace: 'nowrap',
                width: 260,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
        },
    },
}))

export const NFTAsset = styled(Image)(({ theme }) => ({
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottom: `1px solid ${theme.palette.green.dark}`,
}))

export const BuyButton = styled(Button)(({ theme }) => ({
    width: 160,
    padding: '10px 25px',
    color: theme.palette.white.dark,
    fontSize: 14,
}))
