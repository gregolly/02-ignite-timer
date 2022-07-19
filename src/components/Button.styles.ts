import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: '#857e6',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 180px;
    height: 48px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme.white};

    /* ${props => css`background-color: ${buttonVariants[props.variant]}`} */
`