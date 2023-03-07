import Image from 'next/image'
import { styled } from '@mui/material'

export const CardContainer = styled('div')(({ theme }) => ({
    background: theme.palette.gray.light,
    borderRadius: 8,
    cursor: 'pointer',
    border: `1px solid ${theme.palette.green.dark}`,
    section: {
        padding: 20,
        '& h1, h4': {
            whiteSpace: 'nowrap',
            width: 280,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },
}))

export const NFTAsset = styled(Image)(({ theme }) => ({
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottom: `1px solid ${theme.palette.green.dark}`,
}))
