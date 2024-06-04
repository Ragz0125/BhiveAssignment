export const breakpoints = {
    mobile: '510px',
    tablet: '820px',
    desktop: '1024px',
  };
  
  export const devices = {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
  };