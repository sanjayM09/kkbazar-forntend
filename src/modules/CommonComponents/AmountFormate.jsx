import React from 'react';

export const AmountFormatmrp = ({ number }) => {
    const formatIndianNumber = (number) => {
        const strNumber = number?.toFixed();
        const length = strNumber?.length;
        if (length <= 3) {
            return strNumber;
        }
        const lastThreeDigits = strNumber?.substring(length - 3);
        const mainPart = strNumber?.substring(0, length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        return `${mainPart},${lastThreeDigits}`;
    };

    return (
        <>{formatIndianNumber(number)}</>
    );
};






 export const AmountFormat = ({ number }) => {
    const formatIndianNumber = (number) => {
        const strNumber = number?.toFixed(2); // Format number with two decimal places
        const length = strNumber?.length;
        if (length <= 6) {
            return strNumber;
        }
        const lastThreeDigits = strNumber?.substring(length - 6);
        const mainPart = strNumber?.substring(0, length - 6).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        return `${mainPart},${lastThreeDigits}`;
    };

    return (
        <>{formatIndianNumber(number)}</>
    );
};

export default AmountFormat;
