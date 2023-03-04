import styled from 'styled-components';
import longlogo from '../assets/long-logo.svg'

const TitleDiv = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
`;

function TitleBar(){
    return (
        <TitleDiv>
            <img src={longlogo} width='400px'/>            
        </TitleDiv>
    )
}

export default TitleBar;