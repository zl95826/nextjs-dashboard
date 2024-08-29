import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SNAV = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/"
        className="mb-2 flex h-20 rounded-md bg-blue-600 p-4 md:h-40 items-end"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <p>test</p>
    </div>
  );
};

export default SNAV;

const AcmeLogo = () => {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acma</p>
    </div>
  );
};
