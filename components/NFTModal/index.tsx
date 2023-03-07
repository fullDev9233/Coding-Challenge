import { Typography } from '@mui/material'
import useWeb3 from '@/hooks/useWeb3'
import formatNumbers from '@/utils/formatNumbers'
import formatAddress from '@/utils/formatAddress'
import FlexBox from '../FlexBox'
import { StyledDialog, NFTAsset, BuyButton } from './styles'

interface NFTModalProps {
    isOpen: boolean
    nft: any
    handleClose: () => void
}

const NFTModal = ({ isOpen, nft, handleClose }: NFTModalProps) => {
    const { web3 } = useWeb3()

    const nftInfo = nft?.maker_asset_bundle.assets[0]

    const handleBuyNFT = () => {
        window.open(nftInfo?.permalink, '_blank')
    }

    return (
        <StyledDialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='nft-modal-description'
        >
            <NFTAsset
                src={nftInfo?.image_url ? nftInfo.image_url : '/assets/imgs/no_img.jpeg'}
                width={320}
                height={320}
                alt='NFT'
            />
            <section>
                <Typography variant='h1' mb={1.5} className='nft-name'>
                    {nftInfo?.name || 'Unknown'}
                </Typography>
                <Typography variant='h4' mb={1.5} className='nft-id'>
                    ID: {nftInfo?.token_id}
                </Typography>
                <Typography variant='h4' mb={1.5} className='nft-id'>
                    Owned by{' '}
                    <a href={`https://testnets.opensea.io/${nft?.maker?.address}`} target='_blank' rel='noreferrer'>
                        {formatAddress(nft?.maker?.address)}
                    </a>
                </Typography>
                <Typography variant='h4' mb={1.5}>
                    Price: {nft?.current_price ? formatNumbers(web3.utils.fromWei(nft.current_price)) : '0'} ETH
                </Typography>
                <FlexBox sx={{ justifyContent: 'flex-end' }}>
                    <BuyButton variant='contained' onClick={handleBuyNFT}>
                        Buy NFT
                    </BuyButton>
                </FlexBox>
            </section>
        </StyledDialog>
    )
}

export default NFTModal
