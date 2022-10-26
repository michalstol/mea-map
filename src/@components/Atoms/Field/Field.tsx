import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
    testId?: string;
    className?: string;
    name: string;
    label: string;
    disabled?: boolean;
    error?: string;
    children: React.ReactElement;
    isInitiallyTouched?: boolean;
}

function FieldComponent(props: Props): React.ReactElement {
    const [isTouched, setIsTouched] = React.useState<boolean>(
        () => !!props.isInitiallyTouched
    );

    const label = React.useCallback(
        () =>
            props.label
                .split(' ')
                .map((word, idx) => (
                    <span key={`${idx}-${word.toLowerCase()}`}>
                        {word}&nbsp;
                    </span>
                )),
        [props.label]
    );

    const onFocusHandler = () => setIsTouched(true);

    return (
        <Container
            className={props.className}
            data-testid={props.testId}
            isDisabled={!!props.disabled}
            hasError={!!props.error}
        >
            <Wrapper>
                <Placeholder isTouched={isTouched}>{label()}</Placeholder>
                <Label htmlFor={props.name} isTouched={isTouched}>
                    {label()}
                </Label>

                {React.Children.map(props.children, child => {
                    return React.cloneElement(
                        child,
                        {
                            onFocus: () => {
                                onFocusHandler();
                                child.props.onFocus?.();
                            },
                        },
                        null
                    );
                })}
            </Wrapper>

            <Error isVisible={!!props.error && !props.disabled}>
                {props.error}
            </Error>
        </Container>
    );
}

const Field = React.memo(FieldComponent);

Field.displayName = 'Field';

export { Field, Input };

const Container = styled.div<{ isDisabled: boolean; hasError: boolean }>`
    --mea-field-padding: ${props => props.theme.sizes.base_x2};
    --mea-field-line-height: ${props => props.theme.fonts.lineHeight.body};
    --mea-field-color: rgb(${props => props.theme.pallete.black});
    --mea-field-border: rgb(${props => props.theme.pallete.gray_E7});
    --mea-field-background: rgb(${props => props.theme.pallete.white});
    --mea-field-placeholder-color: rgb(${props => props.theme.pallete.gray_82});
    --mea-field-placeholder-background: rgb(
        ${props => props.theme.pallete.white}
    );

    ${props =>
        props.hasError &&
        css`
            --mea-field-color: rgb(${props => props.theme.pallete.secondary});
            --mea-field-border: rgb(${props => props.theme.pallete.secondary});
            --mea-field-background: rgb(${props => props.theme.pallete.white});
            --mea-field-placeholder-color: rgb(
                ${props => props.theme.pallete.secondary}
            );
            --mea-field-placeholder-background: rgb(
                ${props => props.theme.pallete.white}
            );
        `}

    ${props =>
        props.isDisabled &&
        css`
            --mea-field-color: rgb(${props => props.theme.pallete.gray_82});
            --mea-field-border: rgb(${props => props.theme.pallete.gray_E7});
            --mea-field-background: rgb(
                ${props => props.theme.pallete.gray_E7}
            );
            --mea-field-placeholder-color: rgb(
                ${props => props.theme.pallete.gray_82}
            );
            --mea-field-placeholder-background: 'transparent';
        `}

    @keyframes showErrorAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: calc(${props => props.theme.fonts.lineHeight.caption} / 2);
    padding: var(--mea-field-padding);
    font-family: ${props => props.theme.fonts.family.poppins};
    font-size: ${props => props.theme.fonts.size.body};
    font-weight: ${props => props.theme.fonts.weight.regular};
    line-height: var(--mea-field-line-height);
    border: 1px solid var(--mea-field-border);
    border-radius: ${props => props.theme.sizes.base_x2};
    background-color: var(--mea-field-background);
    transition: border-color 300ms ease-out, background-color 300ms ease-out;
`;

const Input = styled.input`
    all: unset;
    position: relative;
    width: 100%;
    max-width: 100%;
    color: var(--mea-field-color);
    transition: color 300ms ease-out;
    display: block;
    z-index: 1;
`;

const Label = styled.label<{ isTouched: boolean }>`
    --mea-field-label-touched: translate(0, 101%);

    position: absolute;
    top: calc(var(--mea-field-line-height) / 2 + var(--mea-field-padding));
    left: var(--mea-field-padding);
    color: var(--mea-field-placeholder-color);
    transform: translate(0, -50%);
    transition: color 300ms ease-out;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;

    span {
        display: inline-block;
        transition: transform 300ms ease-in-out;

        ${Array(5)
            .fill(null)
            .map(
                (_, idx) => css`
                    &:nth-child(${idx}) {
                        transition-delay: ${(idx - 1) * 100}ms;
                    }
                `
            )}

        ${props =>
            props.isTouched &&
            css`
                transform: var(--mea-field-label-touched);
            `}
    }
`;

const Placeholder = styled.aside<{ isTouched: boolean }>`
    --mea-field-placeholder-touched: translate(0, 0);

    position: absolute;
    top: 0;
    left: var(--mea-field-padding);
    padding: 0 ${props => props.theme.sizes.half};
    font-size: ${props => props.theme.fonts.size.body};
    font-size: ${props => props.theme.fonts.size.caption};
    line-height: ${props => props.theme.fonts.lineHeight.caption};
    color: var(--mea-field-placeholder-color);
    transform: translate(0, -50%);
    transition: color 300ms ease-out;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--mea-field-placeholder-background);
        transform: translate(0, 101%);
        transition: transform 300ms ease-in-out, background-color 300ms ease-out;
        z-index: -1;

        ${props =>
            props.isTouched &&
            css`
                transform: var(--mea-field-placeholder-touched);
            `}
    }

    span {
        display: inline-block;
        transform: translate(0, 101%);
        transition: transform 300ms ease-in-out;

        ${Array(5)
            .fill(null)
            .map(
                (_, idx) => css`
                    &:nth-child(${idx}) {
                        transition-delay: ${(idx - 1) * 100}ms;
                    }
                `
            )}

        ${props =>
            props.isTouched &&
            css`
                transform: var(--mea-field-placeholder-touched);
            `}
    }
`;

const Error = styled.aside<{ isVisible: boolean }>`
    --mea-field-error-line-height: ${props =>
        props.theme.fonts.lineHeight.caption};

    position: relative;
    min-height: var(--mea-field-error-line-height);
    margin-top: ${props => props.theme.sizes.half};
    padding-left: ${props => props.theme.sizes.base_x5};
    font-size: ${props => props.theme.fonts.size.caption};
    line-height: var(--mea-field-error-line-height);
    color: rgb(${props => props.theme.pallete.secondary});
    text-align: right;
    transition: opacity 300ms ease-out;
    pointer-events: none;
    display: none;

    ${props =>
        props.isVisible &&
        css`
            display: block;
            animation: showErrorAnimation 300ms ease-out alternate forwards;
        `}
`;
