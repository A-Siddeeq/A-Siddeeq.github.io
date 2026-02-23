interface Props {
  title: string;
}

const TitleName = ({ title }: Props) => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-white saira py-2">
        {title}
      </h1>
      <div className="flex flex-col items-center justify-between mb-2">
        <hr className="h-1 w-28 mb-1 bg-blue-400" />
        <hr className="h-1 w-20 mb-1 bg-blue-400" />
        <hr className="h-1 w-16 mb-1 bg-blue-400" />
      </div>
    </>
  );
};

export default TitleName;
