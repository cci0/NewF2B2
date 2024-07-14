export const handleKeyDownNext = (e, refName) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
        e.preventDefault();
        refName.current.focus();
    }
};

export const handleKeyDown = (e, func) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
        e.preventDefault();
        func();
    }
};
