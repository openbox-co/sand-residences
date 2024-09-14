interface ISliderItemProps {
  image?: string | any
  title?: string;
  description?: string;
  sx?: string;
}

export default function SliderItem({ image, title, description, sx }: ISliderItemProps) {
  return (
    <section className={`flex flex-col max-w-xs ${sx}`}>
      <img
        width={286}
        height={280}
        className="w-full h-[280px] object-cover rounded-[22px]"
        title={`Poseidonia ${title}`}
        src={image}
        alt="Image"
      />
      <section className="mt-9 flex flex-col gap-y-2">
        <h3 className="text-blackBroker font-primary text-[26px] leading-none font-bold">
          {title}
        </h3>
        <p className="text-[#000000] leading-8 font-light">
          {description}
        </p>
      </section>
    </section>
  )
}