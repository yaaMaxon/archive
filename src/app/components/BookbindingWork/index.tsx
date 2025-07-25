"use client";

import { motion } from "framer-motion";
import { bookbindingWork } from "@/app/constants/BookbindingWorkSettings";

const BookbindingWork = () => {
  return (
    <div
      id="bookbindingWork"
      className="flex flex-col gap-8 lg:gap-32 lg:flex-row lg:justify-center pb-14 px-6 lg:px-16 lg:pb-24 scroll-mt-[58px] lg:scroll-mt-[98px] lg:relative"
    >
      <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[314px] max-h-8 lg:sticky lg:top-24">
        <span className="text-[#0C1E21] uppercase">Опис документів</span>
      </div>
      <div className="flex flex-col gap-12 lg:max-w-[850px]">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[#172629] text-3xl lg:text-5xl leading-[100%]"
          >
            Описи документів та акти на знищення
          </motion.h2>
          <p className="text-[#0C1E21]">
            За результатами експертизи цінності документів працівники ФОП
            складають опис документів у Львові постійного і тривалого термінів
            зберігання та акти про виділення для знищення документів, що не
            підлягають зберіганню.
            <br />
            <br />
            Виділення документів для знищення і складання про це акту робиться
            після підготовки опису справ постійного і тривалого термінів
            зберігання за цей же період. Акти про виділення документів для
            знищення, що не підлягають зберіганню розглядаються на засіданнях
            експертної комісії підприємства одночасно з описами справ.
            <br />
            <br />
            Після затвердження акту про виділення документів для знищення
            працівники діловодної служби або архівного підрозділу підприємства
            здають вказані документи в господарську службу Підприємства або
            спеціалізованим підприємствам по заготівлі вторинної сировини для їх
            фізичного знищення.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[#172629] text-2xl lg:text-4xl leading-[100%]">
            Оформлення справ постійного і тривалого термінів зберігання
          </h2>
          <ul className="list-disc pl-4">
            {bookbindingWork.map(({ process }, index) => (
              <li key={index} className="lg:text-lg text-[rgba(6,39,44,0.60)]">
                {process}
              </li>
            ))}
          </ul>
          <p className="text-[#0C1E21]">
            Після закінчення діловодного року в написі на обкладинках справ
            постійного і тривалого термінів зберігання вносять необхідні
            уточнення, перевіряють відповідність заголовків справ на обкладинці
            змісту підшитих документів. Описи справ ведуть впродовж декількох
            років з єдиною суцільною нумерацією справ. Справи кожного року
            складають у річний розділ опису. Зведений опис справ постійного
            терміну зберігання установи складається в 4-х екземплярах та
            підлягає затвердженню в органах державних архівів.
            <br />
            <br />
            Зведені описи справ тривалого терміну зберігання складають в двох
            екземплярах і оформляються так само, як і описи на справи постійного
            зберігання. Опису справ тривалого терміну зберігання державним
            архівом не затверджуються.
            <br />
            <br />
            Закінчені діловодством справи постійного і тривалого термінів
            зберігання спільно з реєстраційними журналами контрольно-обліковими
            картками на документи передаються в архівний підрозділ підприємства
            через повних два роки після завершення їх обліку в діловодстві
            (наприклад, справи за 2024 рік передаються в архівний підрозділ в
            2027 році). Справи тимчасового терміну зберігання передають в
            архівний підрозділ підприємства за наказом керівника.
            <br />
            <br />
            Знищення документів без попереднього затвердження описів справ
            постійного зберігання, порушення встановлених Переліком термінів
            зберігання документів, а також умисне знищення, ушкодження або
            приховування офіційних або приватних документів є незаконними і
            тягне за собою відповідальність згідно з чинним адміністративним та
            кримінальним законодавством України.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookbindingWork;
