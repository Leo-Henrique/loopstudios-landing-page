const media = "@media";
const property = "max-width";
const sizes = {
    xxl: "1399.98px",
    xl: "1199.98px",
    lg: "991.98px",
    md: "767.98px",
    sm: "575.98px",
}

export const breakpoints = () => {
    const obj = {};

    Object.keys(sizes).forEach(breakpoint => {
        obj[breakpoint] = `${media} (${property}: ${sizes[breakpoint]})`;
    });
    return obj;
}

export const desktop = `${media} not all and (hover: none)`;
export const animation = `${media} (prefers-reduced-motion: no-preference)`;