import InfoEntry from "@/components/InfoEntry";
import StartMethods from "@/components/StartMethods";

const page = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Log in</h1>

      <div className="flex flex-col gap-5 w-full mb-10">
        <InfoEntry type="email" placeholder="Email" imgPath="/email-icon.svg" />
        <InfoEntry
          type="password"
          placeholder="Password"
          imgPath="/password-icon.svg"
        />
      </div>

      <button className="primary-button w-full !py-4 mb-7">
        Log in with email
      </button>

      <a href="" className="sign-up-link mb-4">
        Forgot your password?
      </a>

      <span className="text-[#103133] mb-1">or log in with</span>

      <StartMethods />

      <div className="w-full text-[#103133] text-lg text-center">
        Not registered?{" "}
        <a href="" className="sign-up-link">
          Sign up
        </a>
      </div>
    </>
  );
};

export default page;
