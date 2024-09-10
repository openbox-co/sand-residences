interface ISliderItemProps {
  image?: string | any
  description?: string;
  sx?: string;
}

export default function SliderItem({ image, description, sx }: ISliderItemProps) {
  return (
    <section className={`flex flex-col max-w-xs ${sx}`}>
      <img
        width={286}
        height={280}
        className="w-full h-[280px] object-cover rounded-[22px]"
        src={image}
        alt="Image"
      />
      <p className="text-[#000000] leading-6 font-light mt-11">
        {description}
      </p>
    </section>
  )
}