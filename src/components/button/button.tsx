import { FC } from "react";

interface ButtonProps {
    onClick: () => void;
    label: string;
}
export const Button: FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} data-testid="button">
            {label}
        </button>
    );
};
