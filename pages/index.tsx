import { useCallback, useState } from 'react'
import Card from '@/components/Card'
import NFTModal from '@/components/NFTModal'
import { Container } from '@/styles/home'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = useCallback(() => {
        setIsOpen(true)
    }, [])

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <main>
            <Container>
                {[0, 1, 2, 3, 4].map((id) => (
                    <Card key={`nft-${id}`} handleClickOpen={handleClickOpen} />
                ))}
            </Container>
            <NFTModal isOpen={isOpen} handleClose={handleClose} />
        </main>
    )
}

export default Home
