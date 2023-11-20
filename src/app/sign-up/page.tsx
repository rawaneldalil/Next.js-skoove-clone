import InfoEntry from "@/components/InfoEntry";
import StartMethods from "@/components/StartMethods";
const SignUp = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold">Sign up</h1>
      <h4 className=" mb-5 text-center text-sm mt-1">
        Start unlocking your piano potential today
      </h4>
      <div className="flex flex-col gap-5 w-full mb-10">
        <InfoEntry type="email" placeholder="Email" imgPath="/email-icon.svg" />
        <InfoEntry
          type="password"
          placeholder="Password"
          imgPath="/password-icon.svg"
        />
        <InfoEntry
          type="text"
          placeholder="First Name"
          imgPath="/first-name-icon.svg"
        />
      </div>
      <button className="primary-button w-full !py-4 mb-8">
        Sign up with email
      </button>
      <StartMethods/>
      <div className="w-full text-[#103133] text-lg text-center">
      Already have an account?
        <a href="" className="sign-up-link">
          Log in
        </a>
      </div>
      <hr className="w-full border-spacing-1 border-slate-300 my-3" />

      <div className="text-[14px] text-[#103133] w-4/5 text-center">
        By signing up I accept the{" "}
        <a href="" className="sign-up-link">
          Privacy Policy
        </a>{" "}
        and the{" "}
        <a href="" className="sign-up-link">
          Terms and Conditions
        </a>
      </div>
      </>
  );
};

export default SignUp;
