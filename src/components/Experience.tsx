const Experience = ({
  startDate,
  endDate,
  location,
  logo,
  company,
  title,
}: Partial<{
  startDate: string;
  endDate: string;
  location: string;
  logo: string;
  company: string;
  title: string;
}>) => {
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div className="text-sm">
        <span className="pr-1">🗓️</span>
        {startDate + " - " + endDate}
      </div>

      <div className="text-sm">
        <span className="pr-1">📍</span>
        {location}
      </div>

      <div className="flex flex-row gap-2 items-center">
        <img className="size-6" src={logo} alt={company} />

        <div className="text-2xl font-bold">
          <a
            className="hover:underline"
            href="https://www.linkedin.com/company/yukon-software-ukraine/"
            target="_blank"
          >
            {company}
          </a>
        </div>
      </div>

      <div className="text-base font-bold">
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/max-levchuk-69109a1ab/"
          target="_blank"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default Experience;
