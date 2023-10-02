import { ReactComponent as Logo } from '../../../Header/img/MainLogo.svg';
import styled from 'styled-components';

const StyledLogo = styled(Logo)`

    @media (max-width: 730px) {
        min-width: 200px;
        width: 250px;
        height: 150px;
}
    /* Cell phones */
    @media (max-width: 480px) {
        width: 200px;
        min-width: 150px;
        height: 100px;
}

`

export default StyledLogo;