import { Link } from "react-router-dom";
import img22 from "@/assets/dogs/img_22.jpg";

const Register = () => {
  const flex = "flex flex-col lg:flex-row";
  const input =
    "border-gray border-b-2 outline-none focus:border-green-2 bg-transparent text-sm xs:text-base sm:text-xl";
  const text = "text-xs xs:text-base sm:text-xl";

  return (
    <section className="pt-[102px] pb-[50px]">
      <div className={`${flex} mx-auto w-5/6 gap-4 `}>
        <div className="mx-auto w-11/12 rounded-xl border-[3px] border-green-1 py-[7%] md:border-[6px] lg:w-1/2">
          <p className="mb-16 text-center font-titan text-2xl text-red xs:text-4xl sm:text-5xl">
            Zarejestruj się
          </p>
          <form action="" className="font-quicksand">
            <div className="flex justify-around">
              <div className="mb-6 flex flex-col">
                <label htmlFor="name" className={`${text}`}>
                  imię
                </label>
                <input type="text" className={`${input}`} />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="mb-6 flex flex-col">
                <label htmlFor="name" className={`${text}`}>
                  nazwisko
                </label>
                <input type="text" className={`${input}`} />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="mb-6 flex flex-col">
                <label htmlFor="phone" className={`${text}`}>
                  telefon
                </label>
                <input type="phone" className={`${input}`} />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className={`${text}`}>
                  email
                </label>
                <input type="email" className={`${input}`} />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="mb-6 flex flex-col">
                <label htmlFor="pass" className={`${text}`}>
                  hasło
                </label>
                <input type="password" className={`${input}`} />
              </div>
            </div>
            <div>
              <div className="flex justify-around">
                <div className={`${text}`}>
                  <input type="checkbox" className="mr-4" />
                  <label htmlFor="">zapamiętaj mnie</label>
                </div>
              </div>
            </div>
            <div className="sm:mb-18 mt-8 mb-10 flex justify-around sm:mt-12">
              <button
                type="submit"
                className="rounded-xl bg-red py-2 px-8 text-white duration-500 hover:bg-green-1"
              >
                Zarejestruj się
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto flex w-11/12 lg:w-1/2">
          <img src={img22} alt="Dogs" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Register;
