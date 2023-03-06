import { Typography } from '@mui/material'
import { CardContainer, NFTAsset } from './styles'

interface CardProps {
    handleClickOpen: () => void
}

const Card = ({ handleClickOpen }: CardProps) => {
    return (
        <CardContainer onClick={handleClickOpen}>
            <NFTAsset
                src='https://gateway.pinata.cloud/ipfs/Qme6rBzYrvv2rnXBbv1dbjCvjEs3Mu4PgafMs6eyCkaxw4'
                width={320}
                height={320}
                alt='NFT'
            />
            <section>
                <Typography variant='h1' mb={1.5}>
                    NFT Name
                </Typography>
                <Typography variant='h4'>Owner Address</Typography>
            </section>
        </CardContainer>
    )
}

export default Card
