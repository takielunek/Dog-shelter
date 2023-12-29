import { Link } from "react-router-dom";
import img18 from "@/assets/dogs/img_18.jpg";

const LogInForm = () => {
  const flex = "flex flex-col lg:flex-row";
  const input =
    "border-gray border-b-2 outline-none focus:border-green-2 bg-transparent text-sm";
  const text = "text-xs xs:text-base sm:text-xl";

  return (
    <section className="pt-[102px] pb-[50px]">
      <div className={`${flex} mx-auto w-5/6 gap-4 `}>
        <div className="mx-auto w-11/12 rounded-xl border-[3px] border-indigo py-[15%] md:border-[6px] lg:w-1/2">
          <p className="mb-16 text-center font-titan text-2xl text-orange xs:text-4xl sm:text-5xl">
            Zaloguj się
          </p>
          <form action="" className="font-quicksand">
            <div className="flex justify-around">
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className={`${text}`}>
                  Email
                </label>
                <input type="email" className={`${input}`} />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className={`${text}`}>
                  Hasło
                </label>
                <input type="password" className={`${input}`} />
              </div>
            </div>
            <div>
              <div className="flex justify-around">
                <div className={`${text}`}>
                  <input type="checkbox" className="mr-4" />
                  <label htmlFor="">Zapamiętaj mnie</label>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-10 flex justify-around sm:mt-12 sm:mb-18">
              <button
                type="submit"
                className="rounded-xl bg-orange py-2 px-8 text-white duration-500 hover:bg-green-1"
              >
                Zaloguj
              </button>
            </div>
            <div className={`${text} mx-auto flex w-2/3 flex-col`}>
              <span className="cursor-pointer duration-300 hover:text-red">
                Nie pamiętam hasła
              </span>
              <span>
                Nie posiadasz konta?{" "}
                <Link
                  to="register"
                  className="text-orange duration-300 hover:font-bold"
                >
                  Zarejestruj się
                </Link>{" "}
              </span>
            </div>
          </form>
        </div>
        <div className="mx-auto w-11/12 lg:w-1/2">
          <img src={img18} alt="Dogs" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default LogInForm;
