import { Typography } from '@mui/material'
import FlexBox from '../FlexBox'
import { StyledDialog, NFTAsset, BuyButton } from './styles'

interface NFTModalProps {
    isOpen: boolean
    handleClose: () => void
}

const NFTModal = ({ isOpen, handleClose }: NFTModalProps) => {
    const handleBuyNFT = () => {
        window.open('https://opensea.io/assets/ethereum/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/7826', '_blank')
    }

    return (
        <StyledDialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='nft-modal-description'
        >
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
                <Typography variant='h4' mb={1.5}>
                    Owner Address
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
