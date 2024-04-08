import {  breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useBasicLayout() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isMobile = breakpoints.smaller('sm')
    const isGreater768 = breakpoints.greater('md')
  
    return { isMobile, isGreater768 }
}
  