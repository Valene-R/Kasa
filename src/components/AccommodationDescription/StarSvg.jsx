import React from 'react';


const StarSvg = ({
    width = 24,
    height = 24,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
            <path d="M12 2L9.223 8.5H2.437L7.434 13.054 5.918 20.5 12 16.55 18.082 20.5 16.566 13.054 21.563 8.5H14.777L12 2z"
                fill={color}
            />
        </svg>
    );
};
export default StarSvg;

