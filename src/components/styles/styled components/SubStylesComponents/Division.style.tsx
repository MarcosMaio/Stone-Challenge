import styled from 'styled-components';

interface DivisionProps {
    width?: string; // Defina o tipo apropriado para a largura, como "string" neste caso
}

export const Division = styled.div<DivisionProps>`
    width: ${(props) => props.width};
`