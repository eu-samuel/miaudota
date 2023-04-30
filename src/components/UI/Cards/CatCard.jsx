import { Card, CardBody, CardFooter, Image, Stack, Button } from '@chakra-ui/react'
import { StyledCard } from '../../../styles/secondaryStyles'

export const CatCard = (props) => {

  const [modelCat, setModelCat, showCat, setShowCat] = props.content

  const adoptCat = () => {
      setModelCat(props.cat)
      setShowCat(true)
  }

return (
  <StyledCard
  color={props.color}
  hover={props.hover}>
<Card
    className="card"
    maxW='14vw'
    maxH="35vh">
  <CardBody>
    <Image
      src={props.cat.image}
      alt={props.cat.name}
      borderRadius='lg'
      w="100%"
    />
    <Stack mt='5' spacing='3'>
      <div className="sub-container">
      <p id="name">{props.cat.name}</p>
      <Button onClick={() => adoptCat()}variant='solid'>
        Sobre
      </Button>
      </div>
      </Stack>
  </CardBody>
  <CardFooter>

  </CardFooter>
</Card>
</StyledCard>
)

}