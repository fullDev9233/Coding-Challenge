import { Typography } from '@mui/material'
import useWeb3 from '@/hooks/useWeb3'
import formatNumbers from '@/utils/formatNumbers'
import { CardContainer, NFTAsset } from './styles'

interface CardProps {
    nft: any
    handleClickOpen: () => void
}

const Card = ({ nft, handleClickOpen }: CardProps) => {
    const { web3 } = useWeb3()

    const imgUrl = nft.maker_asset_bundle.assets[0]

    return (
        <CardContainer onClick={handleClickOpen}>
            <NFTAsset
                src={imgUrl.image_url ? imgUrl.image_url : '/assets/imgs/no_img.jpeg'}
                width={320}
                height={320}
                alt='NFT'
            />
            <section>
                <Typography variant='h1' mb={1.5} className='nft-name'>
                    {imgUrl.name || 'Unknown'}
                </Typography>
                <Typography variant='h4' mb={1.5} className='nft-id'>
                    ID: {imgUrl.token_id}
                </Typography>
                <Typography variant='h4'>
                    Price: {nft.current_price ? formatNumbers(web3.utils.fromWei(nft.current_price)) : '0'} ETH
                </Typography>
            </section>
        </CardContainer>
    )
}

export default Card
