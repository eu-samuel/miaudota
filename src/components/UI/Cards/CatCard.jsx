import { Card, CardBody, CardFooter, Image, Stack, Button } from '@chakra-ui/react'
import { StyledCard } from '../../../styles/secondaryStyles'

export const CatCard = (props) => {

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
      src={props.image}
      alt={props.name}
      borderRadius='lg'
      w="100%"
    />
    <Stack mt='5' spacing='3'>
      <div className="sub-container">
      <p id="name">{props.name}</p>
      <Button variant='solid'>
        Adote
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