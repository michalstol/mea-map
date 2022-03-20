import React from 'react';
import styled, { css } from 'styled-components';

interface WrapperProps {
    size?: string;
    rounded?: string;
    ratio?: number;
    isCircle?: boolean;
    isWide?: boolean;
}

interface Props extends WrapperProps {
    src: string;
    alt?: string;
    className?: string;
}

function Image(props: Props): React.ReactElement {
    return (
        <ImgWrapper
            size={props.size}
            rounded={props.rounded}
            ratio={props.ratio}
            isCircle={props.isCircle}
            isWide={props.isWide}
        >
            <Img
                src={props.src}
                alt={props.alt}
                size={props.size}
                isWide={props.isWide}
                isRatio={!!props.ratio || props.isCircle}
            />
        </ImgWrapper>
    );
}

export { Image };

const ImgWrapper = styled.div<WrapperProps>`
    position: relative;
    line-height: 0;
    display: inline-block;
    overflow: hidden;

    ${props =>
        props.size &&
        css`
            max-width: 100%;
            width: ${props.size};
        `}

    ${props =>
        props.rounded &&
        css`
            border-radius: ${props.rounded};
        `}

        ${props =>
        props.ratio &&
        css`
            aspect-ratio: ${props.ratio};
        `}

    ${props =>
        props.isCircle &&
        css`
            border-radius: 100%;
            aspect-ratio: 1;
        `}

    ${props =>
        props.isWide &&
        css`
            width: 100%;
        `}
`;

const Img = styled.img<{ size?: string; isRatio?: boolean; isWide?: boolean }>`
    max-width: 100%;
    height: auto;

    ${props =>
        props.size &&
        css`
            width: ${props.size};
        `}

    ${props =>
        props.isRatio &&
        css`
            position: relative;
            top: 50%;
            left: 50%;
            width: 100%;
            transform: translate(-50%, -50%);
        `}

    ${props =>
        props.isWide &&
        css`
            width: 100%;
        `}
`;
