import React, { useState } from "react";
import Alex from "../assets/speakers/alex.webp";
import Alex2 from "../assets/speakers/alex2.webp";
import Inga from "../assets/speakers/inga.webp";
import Kate from "../assets/speakers/kate.webp";
import Kate2 from "../assets/speakers/kate2.webp";
import Nelli from "../assets/speakers/nelli.webp";
import Nelli2 from "../assets/speakers/nelli2.webp";
import CardSpeaker from "./subComponents/CardSpeaker";
import SpeakersMarquee from "./subComponents/SpeakersMarquee";
import useResponsive from "../hooks/useResponsive";
import PopUp from "./subComponents/PopUp";

import { useLenis } from "@studio-freight/react-lenis";
const speakerData = [
  {
    name: 'Alex',
    path: Alex,
    path2: Alex2,
    theme: 'В чем заключается работа сценариста и как создавать главных героев?',
    description: `Алекс - невероятно талантливый и яркий человек, который научит вас писать сценарии. Он учится по специальности filmmaking в Филадельфии🇺🇸, а раньше жил в Австрии, где работал на Нетфликсе, а также создал несколько собственных фильмов! Можете посмотреть его портфолио по <a href="http://portfolio.alexhartley.tilda.ws/" class='text-[#000] underline'>ссылке</a>.<br/><br />Алекс поделится своими знаниями и опытом о том, как создавать главных героев: от идеи до реализации. Во время встречи вы сможете узнать, как создавать неповторимых героев, способных вдохновлять зрителей и оставлять яркие впечатления.`,
    awwards: 'Кинофестиваль «Вкратце» - приз зрительских симпатий за лучший фильм'
  },
  {
    name: 'Inga',
    path: Inga,
    theme: 'Особенности работы продюсера и секреты работы на крупных продакшнах',
    description: `Встречайте Ингу, нашего талантливого спикера и продюсера! Инга начала свою карьеру, работая в дочерней компании Газпром медиа холдинга на сериалах, транслируемых на канале НТВ. Затем она приняла участие в производстве Comedy Club и занимала должность продюсера популярного шоу "Танцы дети" <br/><br /> Однако, наиболее значимым для Инги было участие в продюсировании спектакля "Обыкновенная История" режиссера Кирилла Серебрянникова в Гоголь Центре под эгидой компании DrugDrugu. <br /><br/> На своем вебинаре Инга расскажет нам, как стать продюсером кино и театра!`
  },
  {
    name: 'Kate',
    path: Kate,
    path2: Kate2,
    theme: 'Как срежиссировать фильм так, чтобы он выиграл международные кинофестивали?',
    description: `Катя, режиссёр из Нью-Йорка, станет нашим спикером!<br/><br/>Катя приехала в Нью-Йорк два года назад, поступив на специальность кинорежиссуры в вуз Bard College с грантом. <br/><br/>В этом году, Катя выиграла международный кинофестиваль Swedish Film Festival со своим короткометражным фильмом, успела поработать на одной съемочной площадке с Софией Копполой и получить стажировку в киноиндустрии в Париже!<br/><br/>На вебинаре Катя расскажет о том, как срежиссировать свой фильм, который позволит вам выиграть международные кинофестивали!`
  },
  {
    name: 'Nelli',
    path: Nelli,
    path2: Nelli2,
    theme: 'Как стать кинооператором, чьи работы будут показывать на Таймс-Сквер?',
    description: `Нелли - наш кинооператор из Америки! С самого юного возраста Нелли проявляла страсть к кинематографии, поступив в одну из лучших школ искусств в США на факультет Film & Digital Media. Окончив учебу, она уже имела в своем арсенале более 30 фильмов, включая работы для университетов NYU, NYFA, SVA и SCAD.<br/><br/>Нелли также имеет опыт работы на международных рекламных проектах, таких как для LA Fashion Week. Ее работы неоднократно получали признание: фильм, в котором она работала оператором, был номинирован на крупнейший студенческий фестиваль в Нью-Йорке и показан в кинотеатре AMC на Таймс-Сквер.<br/><br/>Она прошла стажировку в Лос-Анджелесе и работала в одном из лучших кино-лагерей США, непрерывно развивая свои навыки и профессиональные возможности. В настоящее время Нелли продолжает совершенствовать свое мастерство, учась в SCAD по специальности Film & TV - Cinematography, и является президентом операторского клуба своего университета.`
  }
]

const WaitingFor = ({ isBlack }) => {
  const {isLaptop, isMobile} = useResponsive()
  const [isPopup, setIsPopup] = useState(false)
  const [clickedIndex, setClickedIndex] = useState(null)
  const lenis = useLenis()

  function popupOpen(index) {
    setIsPopup(true)
    setClickedIndex(index)
    lenis.stop()
  }

  function popupClose() {
    setIsPopup(false)
    lenis.start()
  }

  return (
    <>
        <div
      className={`h-auto px-[4cqw] relative -top-[15px] ${
        isBlack ? "bg-grid-white/[0.04]" : "bg-grid-black/[0.04]"
      } pb-[5.5rem]`}
      id="speakers"
    >
      <div className="flex flex-col w-full gap-6 items-center justify-center">
        <h2 className={`${isLaptop ? isMobile ? "text-[2.6rem]" : "text-7xl" : "text-9xl"} w-auto text-center font-neueB white-black_text`}>
          ЧТО ВАС ЖДЕТ?
        </h2>

      </div>
      <div className={`flex flex-wrap justify-center gap-8 w-full h-auto items-center ${isMobile ? "mt-4" : "mt-14"} relative z-10`}>
        {speakerData.map((speaker, index) => <CardSpeaker name={speaker.name} path={speaker.path} theme={speaker.theme} key={index} onClick={() => popupOpen(index)}/>)}

        {isMobile ? <></> : <SpeakersMarquee Alex={Alex} Inga={Inga} Kate={Kate} Nelli={Nelli} />}
      </div>
      <div className={`bluredBgWaitingFor ${isMobile ? 'small' : ''}`} />
    </div>

    <PopUp speaker={clickedIndex !== null ? speakerData[clickedIndex] : null} popupClose={popupClose} isPopup={isPopup}/>
    </>
  );
};

export default WaitingFor;
