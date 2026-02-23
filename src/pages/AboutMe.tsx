import TitleName from "../components/TitleName";
import HeadingText from "../components/HeadingText";
import MyDetails from "../components/MyDetails";
import MyInterests from "../components/MyInterests";

const AboutMe = () => {
  return (
    <div className="bg-gray-800 pb-6">
      <TitleName title="About me" />

      <div>
        {" "}
        <h1 className="text-blue-400 text-2xl text-center">
          Peace be unto you! I am Abubakar Sadiq.
        </h1>
        <p className="text-center text-white fredoka px-24">
          {""}
          <p className="text-center py-2">
            I am a results-driven Frontend Developer and Software Engineer with
            strong expertise in React, Next.js, JavaScript, HTML, and CSS.{" "}
          </p>
          <p className="text-center py-2">
            {" "}
            I hold a B.Sc from Kano University of Science and Technology and
            have built a solid track record of delivering scalable, user-focused
            web applications. After completing professional training with Zuri x
            14G and Smazib Technologies, I advanced to become a Web Development
            Tutor, mentoring aspiring developers in modern frontend
            technologies.
          </p>
          <p className="text-center py-2">
            {" "}
            I have contributed as a Frontend Team Member at Ubuntu Portal and
            currently serve as the Founder & CEO of As-Siddeeq Software, where I
            lead the delivery of high-quality web and mobile solutions across
            Nigeria and beyond. I build with precision, lead with vision, and
            deliver with impact.
          </p>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around my-4">
        <div>
          <HeadingText text="Personal Details" />
          <MyDetails info="Phone" data="+234 808 003 xxxx" />
          <MyDetails info="Email" data="abubakaradamu1163@gmail.com" />
          <MyDetails info="Addresss" data="Online" />
          <MyDetails info="Job Status" data="Freelance/Contract" />
        </div>
        <div>
          <HeadingText text="My Interests" />
          <MyInterests listItem="Football" />
          <MyInterests listItem="Reading" />
          <MyInterests listItem="Arabic Language" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
