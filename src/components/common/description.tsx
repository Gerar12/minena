import Image from "next/image";
import ZzzAnimation from "@/components/common/ZzzAnimation ";

const Description = () => {
  return (
    <main className="relative w-screen h-screen flex flex-col items-center  justify-center   ">
      <h1 className="text-5xl md:text-6xl  text-center   text-gray-500 hover:text-gray-950  duration-300  mb-96 md:text-center z-10  cursor-default hover:scale-105 ">
        Estamos trabajando
      </h1>

      <ZzzAnimation />

      <Image
        src="https://pub-8e07b509384043bba801930446238e79.r2.dev/images%2Flogo.png"
        alt="Estamos trabajando"
        width={500}
        height={500}
        className="absolute pt-20"
      />
      <p className="text-2xl">Próximamente</p>
    </main>
  );
};

export { Description };
