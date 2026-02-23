import HeadingText from "../components/HeadingText";
import TitleName from "../components/TitleName";

const Contact = () => {
  return (
    <div className="bg-gray-800 p-4">
      <TitleName title="Contact" />
      <HeadingText text="Need my service? Just write a message!" />
      <div className="flex flex-col justify-between items-center w-full bg-black fredoka">
        <div className="flex flex-col sm:flex-row justify-between px-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="rounded-xl bg-slate-400 px-2 text-black placeholder:text-white placeholder:px-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="rounded-xl bg-slate-400 px-2 text-black placeholder:text-white placeholder:px-2"
            />
          </div>
        </div>
        <div>
          <textarea
            name="msg"
            id="msg"
            cols={30}
            rows={5}
            placeholder="Write your message..."
            className="rounded-xl bg-slate-400 m-1 px-2 text-black placeholder:text-white placeholder:px-2"
          ></textarea>
        </div>
        <div>
          <input type="submit" className="flex w-full bg-slate-500" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
