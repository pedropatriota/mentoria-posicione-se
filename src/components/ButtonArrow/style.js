import styled from 'styled-components'
import { ArrowIosForwardOutline as Arrow} from '@styled-icons/evaicons-outline/'

export const ButtonArrow = styled(Arrow)`
  width: 30px;
  transform: rotateY(${(props)=> props.angle});
  cursor: pointer;
  
`;