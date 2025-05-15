"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button";
// import IllustrationContactUs from "@assets/icons/illustrationContactUs.svg";
// import SectionTab from "../SectionTab";
// import { homeContactUs } from "@/app/constants/titleSectionSettings";

export interface ISupportForm {
  name: string;
  phone: string;
  message: string;
}

const ContactUsForm = () => {
  const defaultValues: ISupportForm = {
    name: "",
    phone: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISupportForm>({ defaultValues });

  const onSubmit: SubmitHandler<ISupportForm> = (data) => {
    console.log(data);

    fetch("http://bot-for-archive.onrender.com/requests", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(console.log);

    reset();
  };

  return (
    <div className="flex flex-col gap-[32px] lg:flex-row lg:justify-center lg:gap-16 bg-[#F4F8F8] py-14 px-6 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-4">
        <span className="text-[#0C1E21] text-sm rounded-sm border border-[#E8EDED] bg-white py-[6px] px-2 max-w-[95px] uppercase">
          Контакти
        </span>
        <h2 className="text-[#0C1E21] text-[40px] lg:text-[80px] leading-[100%]">
          Зв’яжіться з нами
        </h2>
        <p className="text-[rgba(6,39,44,0.60)] text-[20px] max-w-[400px] leading-[160%]">
          Маєте запитання щодо архівних послуг, співпраці або просто хочете
          дізнатися більше? Ми завжди на зв`язку!
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="bg-white p-6 lg:p-12"
      >
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row">
            <div className="flex flex-col gap-3 lg:gap-[2px]">
              <label
                htmlFor="name"
                className="text-sm text-[#0C1E21] uppercase"
              >
                Ім`я
              </label>
              <input
                id="name"
                className="text-[rgba(6,39,44,0.60)] placeholder-[rgba(6,39,44,0.60)] rounded-lg border border-[#E8EDED] bg-[#F4F8F8] px-4 py-4 w-full lg:py-2.5"
                {...register("name", {
                  required: "Це поле є обов'язковим!",
                  minLength: {
                    value: 3,
                    message: "Ім'я має містити принаймі 3 символа.",
                  },
                })}
                placeholder="Ім'я"
              />
              {errors.name && (
                <span className="text-red-600 font-medium">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3 lg:gap-[2px]">
              <label
                htmlFor="email"
                className="text-sm text-[#0C1E21] uppercase"
              >
                Телефон
              </label>
              <input
                id="email"
                className="text-[rgba(6,39,44,0.60)] placeholder-[rgba(6,39,44,0.60)] rounded-lg border border-[#E8EDED] bg-[#F4F8F8] px-4 py-4 w-full lg:py-2.5"
                {...register("phone", {
                  required: "Номер телефону є обов'язковим!",
                  minLength: {
                    value: 10,
                    message: "Номер телефон має містити принаймі 10 символів.",
                  },
                  pattern: {
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: "Не правильний формат номера телефону.",
                  },
                })}
                placeholder="Номер телефону"
              />
              {errors.phone && (
                <span className="text-red-600 font-medium">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-[2px] col-span-2">
            <label
              htmlFor="message"
              className="text-sm text-[#0C1E21] uppercase"
            >
              Повідомлення
            </label>
            <textarea
              id="message"
              className="text-[rgba(6,39,44,0.60)] placeholder-[rgba(6,39,44,0.60)] rounded-lg border border-[#E8EDED] bg-[#F4F8F8] px-4 py-4 w-full lg:py-2.5 resize-none"
              rows={5}
              {...register("message", {
                required: "Повідомлення є обов'язковим!",
              })}
              placeholder="Залиште повідомлення"
            />
            {errors.message && (
              <span className="text-red-600 font-medium">
                {errors.message.message}
              </span>
            )}
          </div>
          <Button className="text-white" type="submit">
            Надіслати
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
