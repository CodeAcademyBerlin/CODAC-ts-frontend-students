export const isNavLinkActive = (linkPath: string, routerAsPath: string) => {
  if (
    routerAsPath.includes(linkPath) ||
    (routerAsPath.includes('lms/') && linkPath.includes('welcome'))
  ) {
    return true;
  } else {
    return false;
  }
};
