import medias from "@/const/social-medias";

const SocialMedias = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {medias.map((socialMedia) => (
        <a key={socialMedia.name} target="_blank" href={socialMedia.link}>
          <div className="flex flex-col gap-4 p-8 bg-[#d4d4d4] hover:bg-[#e2e2e2] dark:bg-[#191919] rounded dark:hover:bg-[#232323] hover:-translate-y-1 duration-300">
            <img
              className="size-8"
              src={socialMedia.logo}
              alt={socialMedia.name}
            />
            <div className="text-2xl font-bold">{socialMedia.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMedias;
