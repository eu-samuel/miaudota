import { useNavigate } from 'react-router-dom'
import { CatRoutes } from '../../routes/catRoutes'
import { StyledCard } from './../SecondaryStyles';

export const CatCard = (props) => {
  const navigate = useNavigate()

return (
  <>
  <StyledCard
  color={props.color}
  hover={props.hover}>

<div className="card">
    <img src={props.cat.image} alt={props.cat.name}/>
      <div className="sub-container">
        <div id="name">
      <span id="name">{props.cat.name}</span>
      </div>
      <button onClick={() => CatRoutes(props.cat.name, navigate)}>
        Sobre
      </button>
      </div>
  </div>
</StyledCard>
</>
)
}