export const valueType = {
    ETHER: 1,
    WALLETADDRESS: 2,
}

export function isValueValid(value, inputValueType) {
    let valueValid;
    switch (inputValueType) {
        case valueType.ETHER:
            valueValid = (/^[+]?([.]\d+|\d+([.]\d+)?)$/i).test(value);
            return valueValid;
        case valueType.WALLETADDRESS:
            if ((/^(0x)?[0-9a-f]{40}$/i).test(value)) {
                return true;
            } else {
                return false;
            }
    }
}