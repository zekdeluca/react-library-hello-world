// @flow
import React from 'react';

// Styles
import { StyledLoader } from './styles';

type Props = {
    loading?: boolean,
    size?: string,
    speed?: string,
    title?: string,
    width?: string,
};

function Loader(props: Props) {
    if (!props.loading) {
        return null;
    }

    return (
        <StyledLoader
            speed={props.speed}
            size={props.size}
            title={props.title}
            width={props.width}
        />
    );
}

Loader.defaultProps = {
    loading: false,
    size: '50px',
    speed: '2s',
    title: 'Loading',
    width: '5px',
};

export default Loader;
