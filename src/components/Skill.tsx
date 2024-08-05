const Skill = ({
  label,
  icon,
  description,
}: {
  label: string;
  icon: string;
  description: string;
}) => {
  return (
    <div
      key={label}
      className="flex flex-col gap-3 items-center justify-center"
    >
      <div className="flex flex-row gap-3 items-center justify-center">
        <img className="size-6 object-contain" src={icon} alt={label} />
        <div className="text-xl font-bold">{label}</div>
      </div>

      <div className="text-[#626262] text-sm font-normal text-center">
        {description}
      </div>
    </div>
  );
};

export default Skill;
