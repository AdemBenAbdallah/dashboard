import React from 'react';

interface ButtonStatusProps {
    color: string;
    text: string;
    backgroundColor: string;
}

const ButtonStatus: React.FC<ButtonStatusProps> = ({ color, text, backgroundColor }) => {
    return (
        <button
            style={{
                color: color,
                backgroundColor: backgroundColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                gap:"6px",
                width: "5rem",
                height: "1.75rem",
                borderRadius: "2.5rem",
                border: "none",
                padding: "3px",
                outline: "none",
                cursor:"pointer"
            }}
        >
            <span
                style={{
                    width: "0.25rem",
                    height: "0.25rem",
                    borderRadius: "50%",
                    background: color
                }}
            ></span>
            <span
                style={{
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    color: color
                }}
            >{text}</span>
        </button>
    );
};

export default ButtonStatus;
