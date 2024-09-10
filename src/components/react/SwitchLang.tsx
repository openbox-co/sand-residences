import { getLangFromUrl, useTranslatedPath } from "@/utils/i18n";
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

interface Props {
  url: URL;
}

export default function SwitchLang({ url }: Props) {
  const lang = getLangFromUrl(url);
  const translatePath = useTranslatedPath(lang);
  const [isChecked, setIsChecked] = useState(lang === 'es');
  const handleChange = () => {
    setIsChecked((prevCheck) => !prevCheck);
    const nextLang = isChecked ? 'en' : 'es';
    window.location.href = translatePath('/', nextLang);
  };

  return (
    <section className="relative inline-block hover:bg-blackBroker hover:bg-opacity-10 rounded-lg">
      <select
        value={lang}
        onChange={handleChange}
        className="appearance-none w-full bg-transparent py-2 px-4 pr-8 rounded leading-tight focus:outline-none font-bold text-[#17161A]"
      >
        <option value='es'>ES</option>
        <option value='en'>EN</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#17161A]">
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </section>
  );
};
