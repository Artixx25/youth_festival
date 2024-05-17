import React from 'react'
import useResponsive from '../hooks/useResponsive'

const Rules = ({isBlack}) => {
  const {isLaptop, isMobile, isBigLaptop} = useResponsive()
  return (
    <section className={`${isMobile ? 'pb-14' : 'min-h-[60vh]'} h-max px-[4cqw] relative -top-[11px] rules z-[2]`} id='rules'>
      <div className={`flex flex-col h-auto justify-center w-full ${isMobile ? '' : 'items-center'}`}>
        <h2 className={`${isLaptop ? isMobile ? "text-[2.6rem]" : "text-7xl" : "text-9xl"} w-max font-neueB white-black_text`}>
          ПРАВИЛА
        </h2>

        <ul className={`w-full white-black_text h-max flex items-start ${isBigLaptop ? 'flex-wrap pb-8 justify-center text-center gap-16 mt-[4%]' : isLaptop ? isMobile ? 'flex-col gap-7 justify-center mt-[5%] opacity-80' : 'flex-wrap pb-8 justify-center text-center gap-16 mt-[4%]' : 'justify-between gap-10 mt-[6.5%]'}`}>
          <li className={`font-montserrat flex items-start gap-2 ${isBigLaptop ? 'w-[45%] text-left' : isLaptop ? isMobile ? 'w-full text-left' : 'w-full text-left' : 'w-[35%]'}`}>
            <span className={`relative ${isMobile ? 'top-[2px]' : 'top-2'}`}>1.</span>
            <p className={`${isMobile ? 'text-xl' : 'text-4xl'}`}>Можно иметь фильм в открытом доступе, принимаем работы всех начинающих киношников</p>
          </li>
          <li className={`font-montserrat flex items-start gap-2 ${isBigLaptop ? 'w-[45%] text-left' : isLaptop ? isMobile ? 'w-full text-left' : 'w-full text-left' : 'w-[35%]'}`}>
            <span className={`relative ${isMobile ? 'top-[2px]' : 'top-2'}`}>2.</span>
            <p className={`${isMobile ? 'text-xl' : 'text-4xl'}`}>Можно отправить больше, чем одну работу или выбрать больше, чем одну номинацию</p>
          </li>
          <li className={`font-montserrat flex items-start gap-2 ${isBigLaptop ? 'w-[45%] text-left' : isLaptop ? isMobile ? 'w-full text-left' : 'w-full text-left' : 'w-[30%]'}`}>
            <span className={`relative ${isMobile ? 'top-[2px]' : 'top-2'}`}>3.</span>
            <p className={`${isMobile ? 'text-xl' : 'text-4xl'}`}>Участники: школьники и студенты</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Rules
