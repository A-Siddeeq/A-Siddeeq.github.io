interface Details {
  info: string;
  data: string;
}

const MyDetails = ({ info, data }: Details) => {
  return (
    <div className="flex justify-between rounded-xl px-6 m-2 bg-gray-600">
      <p className="text-blue-400">{info}</p>
      <p className="text-white">{data}</p>
    </div>
  );
};

export default MyDetails;
