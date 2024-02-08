const Experience = ({
  time,
  role,
  where,
  url,
}: {
  time: string;
  role: string;
  where: string;
  url: string;
}) => (
  <div className="flex gap-1 sm:py-4 py-3">
    <div className="sm:max-w-28 sm:min-w-28 sm:text-sm max-w-16 min-w-16 text-xs">
      {time}
    </div>
    <div className="flex flex-wrap gap-1 justify-between w-full">
      <a href={url} className="w-full sm:w-auto">
        {where}
      </a>
      <div> {role}</div>
    </div>
  </div>
);

export default Experience;
