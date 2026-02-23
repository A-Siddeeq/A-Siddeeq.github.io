import {
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import pic from "../assets/pic.jpg";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg')] bg-cover">
        <div className="border border-black w-full h-[90vh]">
          <div className="flex flex-col items-center text-center pt-[30%] md:pt-[7%]">
            <img
              src={pic}
              alt="Abubakar Sadiq"
              className="absolute border rounded-full z-10"
              width={"300px"}
            />
            <div className=" bg-blue-400 rounded pt-56 pb-4 px-6 translate-y-24">
              <h2 className="saira font-bold text-3xl">Abubakar Sadiq</h2>
              <p className="fredoka text-lg pb-1">Frontend Developer</p>
              <div className="flex justify-between">
                <a href="https://t.me/">
                  <FaTelegram className="border rounded-full p-1 mx-2 h-10 w-10 transition delay-100 hover:bg-gray-500 ease-out duration-1000" />
                </a>
                <a href="https://github.com/a-siddeeq">
                  <FaGithub className="border rounded-full p-1 mx-2 h-10 w-10 transition delay-100 hover:bg-gray-500 ease-out duration-1000" />{" "}
                </a>
                <a href="https://www.linkedin.com/in/abubakar-biotech/">
                  <FaLinkedin className="border rounded-full p-1 mx-2 h-10 w-10 transition delay-100 hover:bg-gray-500 ease-out duration-1000" />
                </a>
                <a href="https://x.com/_absaad">
                  <FaXTwitter className="border rounded-full p-1 mx-2 h-10 w-10 transition delay-100 hover:bg-gray-500 ease-out duration-1000" />
                </a>
                <a href="https://youtube.com/channel/UCxQD_3FgvSaL7IOEbUWuRAQ">
                  <FaYoutube className="border rounded-full p-1 mx-2 h-10 w-10 transition delay-100 hover:bg-gray-500 ease-out duration-1000" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
