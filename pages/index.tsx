import { useCallback, useState } from 'react'
import Card from '@/components/Card'
import NFTModal from '@/components/NFTModal'
import { Container } from '@/styles/home'

const openseaApiUrl = process.env.NEXT_PUBLIC_OPENSEA_API as string

const Home = ({ nfts }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedNFT, setSelectedNFT] = useState<any>(null)

    const handleClickOpen = useCallback((_nft: any) => {
        setIsOpen(true)
        setSelectedNFT(_nft)
    }, [])

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <main>
            <Container>
                {nfts &&
                    nfts.orders.map((nft: any) => (
                        <Card key={nft.order_hash} nft={nft} handleClickOpen={() => handleClickOpen(nft)} />
                    ))}
            </Container>
            <NFTModal isOpen={isOpen} nft={selectedNFT} handleClose={handleClose} />
        </main>
    )
}

export async function getServerSideProps() {
    const res = await fetch(openseaApiUrl)
    const nfts = await res.json()
    return { props: { nfts } }
}

export default Home
