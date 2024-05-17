"use client";
import React, { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import StepProgress from "./StepProgress";
import Multiselect from "multiselect-react-dropdown";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useForm, SubmitHandler } from "react-hook-form";
import useResponsive from "../../hooks/useResponsive";
import toast from "react-hot-toast";
import axios from "axios";
const steps = [
  {
    name: "Основная Информация",
    description: "Заполните основную информацию о вас и о вашем фильме.",
  },
  {
    name: "Основная Информация",
    description: "Заполните основную информацию о вашем фильме.",
  },
  {
    name: "Дополнительная Информация",
    description:
      "Заполните дополнительную информацию о вашей команде и фильме.",
  },
];

const optionsMultiSelect = [
  {
    name: "1. Короткий метр fiction",
  },
  {
    name: "2. Короткий метр documentary",
  },
  {
    name: "3. Видео из фотографий (Still video) / Серия фотографий",
  },
  {
    name: "4. Лучшее творческое видео",
  },
  {
    name: "5. Лучший музыкальный клип",
  },
  {
    name: "6. Лучший сценарий",
  },
  {
    name: "7. Лучшая режиссура",
  },

  {
    name: "8. Лучший монтаж",
  },
  {
    name: "9. Лучшая операторская работа",
  },

  {
    name: "10. Лучшая актерская игра",
  },

  {
    name: "11. Приз зрительских симпатий",
  },
];

type Inputs = {
  FirstName: string;
  LastName: string;
  Email: string;
  filmName: string;
  FilmSinopsis: string;
  FilmLink: string;
  Genre: string;
  FilmDuration: string;
  shootingGroup: string;
  actorsRoles: string;
  Poster: File;
};

export function FormMain({ popupClose, isPopup }) {
  const [activeStep, setActiveStep] = useState(1);
  const [previousStep, setPreviousStep] = useState(0);
  const [rawedPoster, setRawedPoster] = useState(null);
  const multiSelectScroll = useRef(null);
  const formRef = useRef(null);
  const { isMobile } = useResponsive();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const lastWatch = Boolean(
    watch(["shootingGroup", "actorsRoles"]).findIndex((field) => field == "")
  );

  const notifyFillAllFields = () =>
    toast.error("Заполните все требуемые поля.");

  const notifyValidFields = () => toast.error("Ваш Емеил не верный.");

  const notifySuccess = () => toast.success("Вы приняли участие.😍 Урааааа!.");

  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // const getPosterXD = watch('Poster')
  // const initializedPosterWatch = getPosterXD ? getPosterXD[0] !== undefined : ''

  const handlePosterChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64String = await base64(file);
      setRawedPoster(base64String);
    }
  };


  const onSubmit: SubmitHandler<Inputs> = async (
    {
      FirstName,
      LastName,
      Email,
      filmName,
      FilmSinopsis,
      Genre,
      FilmDuration,
      shootingGroup,
      FilmLink,
      actorsRoles,
      Poster,
    },
    e?: React.BaseSyntheticEvent
  ) => {
    e.preventDefault();

    const formInfo = new FormData();

    const NomiData = multiSelectScroll.current.getSelectedItems();
    const nominationsJson = JSON.stringify(NomiData);

    const data = {
      FirstName,
      LastName,
      Email,
      filmName,
      FilmSinopsis,
      FilmLink,
      Genre,
      FilmDuration,
      shootingGroup,
      actorsRoles,
      Poster: rawedPoster,
      Nominations: nominationsJson,
    };

    for (var key in data) {
      formInfo.append(key, data[key]);
    }

    try {
      await axios({
        method: "post",
        url: `${import.meta.env.VITE_SERVER_URL}/participate`,
        data: formInfo,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res)
        popupClose();
        setActiveStep(1);
        setPreviousStep(0);
        reset();
        notifySuccess();
      });
    } catch (e) {
      console.log(e);
      popupClose();
      setActiveStep(1);
      setPreviousStep(0);
      reset();
      notifyFillAllFields();
    }
  };

  function nextStep() {
    setActiveStep(activeStep + 1);
    setPreviousStep(activeStep - 1);
  }
  function prevStep() {
    setActiveStep(activeStep - 1);
    setPreviousStep(activeStep + 1);
  }

  return (
    <div
      className={`max-w-md w-full relative mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-black customTransition overflow-hidden ${
        isPopup
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 pointer-events-none hidden"
      }`}
    >
      <div className="w-full flex items-center justify-center rounded-lg mb-2 gap-3">
        <img
          src="/logo.webp"
          loading="lazy"
          alt="logo"
          className="w-full max-w-[70px]"
          draggable="false"
        />
        <h3 className=" text-white font-neueB text-xl">Youth Vision</h3>
      </div>

      <StepProgress
        activeStep={activeStep}
        steps={steps}
        previousStep={previousStep}
      />

      <p className="text-xs font-montserrat max-w-sm text-neutral-400 mt-3 text-left h-[32px]">
        {steps[activeStep - 1].description}
      </p>

      <form className="my-6" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <div
          className={`flex items-start ${
            isMobile
              ? "min-h-[445px]"
              : activeStep == 2
              ? "min-h-[435px]"
              : "min-h-[450px]"
          } h-auto relative overflow-hidden customTransition w-full gap-5`}
        >
          {/* 1 first step */}
          <div
            className={`${
              activeStep == 1
                ? "left-0 pointer-events-auto select-auto opacity-100"
                : "left-[101vw] opacity-0 pointer-events-none select-none"
            } w-full h-auto absolute top-0 customTransition`}
          >
            <div className={`flex relative flex-row space-y-0 space-x-2 mb-5`}>
              <LabelInputContainer>
                <Label htmlFor="firstname">Имя</Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  {...register("FirstName", { required: true, maxLength: 80 })}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Фамилия</Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  {...register("LastName", { required: true, maxLength: 100 })}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Имейл</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="filmName">Название нашего фильма</Label>
              <Input
                id="filmName"
                placeholder="Fight Club"
                type="text"
                {...register("filmName", { required: true, maxLength: 100 })}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="descriptionShort">
                Синопсис к фильму / серии фотографий <br />{" "}
                <span className="opacity-60 relative font-[400] top-[1px]">
                  (краткое описание)
                </span>
              </Label>
              <Input
                id="descriptionShort"
                placeholder="some random short description of some film =)"
                type="text"
                {...register("FilmSinopsis", {
                  required: true,
                  maxLength: 500,
                })}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="FilmLink">Ссылка к фильму</Label>
              <Input
                id="FilmLink"
                placeholder="https://drive.google.com/file/FilmLastChance"
                type="text"
                {...register("FilmLink", {
                  required: true,
                  maxLength: 1500,
                })}
              />
            </LabelInputContainer>
          </div>

          {/* 2 second step */}

          <div
            className={`${
              activeStep == 2
                ? "left-0 opacity-100 pointer-events-auto select-auto"
                : "left-[101vw] opacity-0 pointer-events-none select-none"
            } w-full h-auto absolute top-0 customTransition`}
          >
            <div className={`flex flex-col space-y-4 mb-5`}>
              <LabelInputContainer>
                <Label htmlFor="firstname">
                  Выберете номинацию / номинации, в которых вы хотите принять
                  участие
                </Label>
                <ReactLenis>
                  <Multiselect
                    id="nominations"
                    avoidHighlightFirstOption
                    emptyRecordMsg="Вы выбрали все номинации!)"
                    options={optionsMultiSelect} // Options to display in the dropdown
                    displayValue="name" // Property name to display in the dropdown options
                    ref={multiSelectScroll}
                    hidePlaceholder
                  />
                </ReactLenis>
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="genre">Жанр творческой работы</Label>
                <Input
                  id="genre"
                  placeholder="Комедия, драма ..."
                  type="text"
                  {...register("Genre", { required: true, maxLength: 100 })}
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="FilmDuration">Длительность вашего фильма</Label>
                <Input
                  id="FilmDuration"
                  placeholder="Сколько часов / минут / секунд"
                  type="text"
                  {...register("FilmDuration", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </LabelInputContainer>
            </div>
          </div>

          {/* 3 third step */}

          <div
            className={`${
              activeStep == 3
                ? "left-0 opacity-100 pointer-events-auto select-auto"
                : "left-[101vw] opacity-0 pointer-events-none select-none"
            } w-full h-auto absolute top-0 customTransition`}
          >
            <div className={`flex flex-col space-y-4 mb-5`}>
              <LabelInputContainer>
                <Label htmlFor="poster">
                  Постер к фильму{" "}
                  <span className="opacity-60 relative font-[400] top-[1px]">
                    (При наличии)
                  </span>
                </Label>
                <Input
                  id="poster"
                  placeholder="Файлик"
                  style={{
                    fontFamily: `Montserrat, sans-serif`,
                    fontSize: "0.875rem",
                  }}
                  type="file"
                  {...register("Poster")}
                  onChange={handlePosterChange}
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="shootingGroup">Съемочная группа:</Label>
                <textarea
                  id="shootingGroup"
                  {...register("shootingGroup", {
                    required: true,
                    maxLength: 1100,
                  })}
                  placeholder="- ФИО режиссера                                                                     - ФИО оператора                                                                      - ФИО продюсерa                                                                      - ФИО сценариста                                                                     - ФИО монтажера                                                                      - Комментарии"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="actorsRoles">Актеры и роли</Label>
                <textarea
                  id="actorsRoles"
                  {...register("actorsRoles", {
                    required: true,
                    maxLength: 1100,
                  })}
                  placeholder="Ким Чен Ын: Президент Северной Кореи"
                />
              </LabelInputContainer>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 relative top-1">
          {activeStep > 1 ? (
            <button
              className="bg-gradient-to-br hoverTypeScale relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-[#ffffffe5] rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              onClick={() => prevStep()}
              type="button"
            >
              &larr; Назад
              <BottomGradient green={false} />
            </button>
          ) : (
            <button
              className="bg-gradient-to-br hoverTypeScale relative group/btn from-[#8f3f472d] to-zinc-900 block bg-zinc-800 w-full text-red-500 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              onClick={() => popupClose()}
              type="button"
            >
              Закрыть
              <BottomGradient green={false} />
            </button>
          )}

          {activeStep == steps?.length ? (
            <button
              className="bg-gradient-to-br disabled:pointer-events-none disabled:opacity-80 relative group/btn from-zinc-900 to-green-400/[.1] block bg-zinc-800 w-full text-green-300 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={!lastWatch}
            >
              Отправить
              {/* <BottomGradient green /> */}
            </button>
          ) : (
            <button
              className="bg-gradient-to-br hoverTypeScale relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button"
              onClick={async () => {
                const activeWatching =
                  activeStep == 1
                    ? [
                        "FirstName",
                        "Email",
                        "LastName",
                        "filmName",
                        "FilmSinopsis",
                        "FilmLink",
                      ]
                    : activeStep == 2
                    ? ["Genre", "FilmDuration"]
                    : "";
                const watchFieldsTrigger = watch([...activeWatching]);
                const emptyField = watchFieldsTrigger.findIndex(
                  (field) => field == ""
                );

                if (emptyField !== -1) {
                  return notifyFillAllFields();
                }

                const EmailCheck = await trigger("Email");
                if (!EmailCheck) {
                  return notifyValidFields();
                }

                if (
                  activeStep == 2 &&
                  !multiSelectScroll.current.getSelectedItems().length
                ) {
                  return notifyFillAllFields();
                }

                nextStep();
              }}
            >
              Дальше &rarr;
              <BottomGradient green={false} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

const BottomGradient = ({ green }) => {
  return (
    <>
      <span
        className={`group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent ${
          green ? "via-green-400" : "via-[#8f3f47]"
        } to-transparent`}
      />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
