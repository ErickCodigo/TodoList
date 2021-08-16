const fallbackAction = (index) => index;

export const createFakeData = (len = 1, action = fallbackAction) => {
    return new Array(len).fill(null).map((_, i) => action(i));
}
