import Image from 'next/image'
import { styled } from '@mui/material'

export const CardContainer = styled('div')(({ theme }) => ({
    background: theme.palette.gray.light,
    borderRadius: 8,
    cursor: 'pointer',
    section: {
        padding: 20,
    },
}))

export const NFTAsset = styled(Image)(() => ({
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
}))
