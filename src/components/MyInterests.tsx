interface Interests {
  listItem: string;
}

const MyInterests = ({ listItem }: Interests) => {
  return (
    <div className="flex justify-between rounded-xl px-6 m-2 bg-gray-600">
      <div className="text-white">{listItem}</div>
    </div>
  );
};

export default MyInterests;
