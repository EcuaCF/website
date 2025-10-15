import { useLanguage } from "@/components/LanguageContext";
import Image from "next/image";

export function TrustedIcon() {
  const {language} = useLanguage();
  const text = {
    text1: language === 'EN' ? 'Trusted by' : 'Con la confianza de',
    text2: language === 'EN' ? 'people.' : 'personas.',
  }

  return (
    <div className="bg-transparent border-neutral-400 flex rounded-full border p-1 shadow-sm w-60 align-middle">
      <div className="flex -space-x-1.5 items-center ml-1">
        <Image
          className="ring-background rounded-full ring-1"
          src="/images/trusted-by/user.png"
          width={25}
          height={25}
          alt="Avatar 01"
        />
        <Image
          className="ring-background rounded-full ring-1"
          src="/images/trusted-by/user.png"
          width={25}
          height={25}
          alt="Avatar 02"
        />
        <Image
          className="ring-background rounded-full ring-1"
          src="/images/trusted-by/user.png"
          width={25}
          height={25}
          alt="Avatar 03"
        />
      </div>
      <p className="text-muted-foreground px-2 text-xs text-neutral-500 text-center align-middle pt-1">
        {text.text1} <strong className="text-neutral-600 font-bold">+100</strong>{" "}
        {text.text2}
      </p>
    </div>
  )
}
