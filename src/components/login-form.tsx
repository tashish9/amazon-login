import { useFormik } from "formik";
import Image from "next/image";
import { z } from "zod";

const LoginFormValidationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string(),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      try {
        LoginFormValidationSchema.parse(values);
      } catch (error: any) {
        return error.formErrors.fieldErrors;
      }
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form className="mx-auto mt-6 " onSubmit={formik.handleSubmit}>
        <div className="h-[46px] w-full">
          <input
            type="email"
            id="email"
            {...formik.getFieldProps("email")}
            className="w-full border-b-2 border-lightgray bg-transparent py-[7px] px-1 transition-colors duration-200 placeholder:text-primary focus:border-primary focus:bg-transparent focus:outline-none"
            placeholder="Email"
          />

          {formik.touched.email && !!formik.errors.email && (
            <div className="mt-[5px] flex items-center gap-1 text-xs text-secondary md:text-[14px]">
              <div className="relative h-3 w-3 md:h-4 md:w-4">
                <Image src="/error.svg" fill alt="Err" />
              </div>
              <p>{formik.errors.email[0]}</p>
            </div>
          )}
        </div>

        <div className="mt-5 h-[25px] w-full">
          <input
            type="password"
            id="password"
            className="w-full  border-b-2 border-lightgray bg-transparent py-[7px] px-1 transition-colors duration-200 placeholder:text-primary focus:border-primary focus:outline-none"
            placeholder="Password"
          />
        </div>

        <button
          className="mt-7 h-10 w-full rounded-full border-none bg-primary leading-6 text-white md:h-[49px] md:text-[19px] "
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div className="mx-auto mt-4 flex items-center justify-between">
        <button className="h-[15px] bg-none text-left text-[14px] leading-[18px]">
          Forgot Password?
        </button>
        <button className="h-[15px] bg-none text-left text-[14px] leading-[18px] text-secondary">
          New User ? Sign Up
        </button>
      </div>
    </>
  );
};

export default LoginForm;
