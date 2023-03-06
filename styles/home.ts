import { styled } from '@mui/material'

export const Container = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '32px',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '40px',
}))
