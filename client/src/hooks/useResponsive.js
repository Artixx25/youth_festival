import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 768px)"
      });
      const isBigLaptop = useMediaQuery({
        query: "(min-width: 991px) and (max-width: 1400px)"
      })
      const isLaptop = useMediaQuery({
        query: "(max-width: 990px)"
      });
      const isTablet = useMediaQuery({
        query: "(min-width: 551px) and (max-width: 850px)"
      });
      const isMobile = useMediaQuery({
        query: "(max-width: 550px)"
      });

      return {isDesktop, isBigLaptop, isLaptop, isTablet, isMobile}
}

export default useResponsive