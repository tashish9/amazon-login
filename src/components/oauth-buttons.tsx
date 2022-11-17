import Image from "next/image";

const OAuthButtons = () => {
  return (
    <div className="mx-auto mt-6 w-full">
      <button className="relative h-[46px] w-full border-none bg-blue text-center text-sm uppercase text-white">
        <div className="absolute inset-x-1 top-[9px] h-7 w-7 md:inset-1 md:h-9 md:w-9">
          <Image src="/google.png" alt="google" fill className="object-cover" />
        </div>
        continue with google
      </button>

      <button className=" relative mt-4 h-[46px] w-full border-none bg-blue text-center text-sm uppercase text-white">
        <div className="absolute inset-x-1 top-[9px] h-7 w-7 md:inset-1 md:h-9 md:w-9">
          <Image
            src="/facebook.png"
            alt="facebook"
            fill
            className="object-cover"
          />
        </div>
        continue with facebook
      </button>
    </div>
  );
};

export default OAuthButtons;
