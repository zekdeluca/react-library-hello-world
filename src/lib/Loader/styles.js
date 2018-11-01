// @flow
import styled, { keyframes } from 'styled-components';
import theme from '../defaultTheme';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.span`
    display: inline-block;
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    margin: 0 auto;

    border: ${(props) => props.width} solid ${theme.loaderSecondary};
    border-radius: 50%;
    border-top: ${(props) => props.width} solid ${theme.loaderPrimary};

    animation: ${rotate} ${(props) => props.speed} linear infinite;
`;
