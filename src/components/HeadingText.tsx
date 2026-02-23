interface H1 {
  text: string;
}
const HeadingText = ({ text }: H1) => {
  return (
    <h1 className="text-center text-lg font-bold text-white saira py-2">
      {text}
    </h1>
  );
};

export default HeadingText;
