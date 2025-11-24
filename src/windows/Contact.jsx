import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "@/components/WindowControls";
import { socials } from "@/constants";

const Contact = () => {
  return (
    <>
      <div id="contact-header" className="drag-handle h-9 bg-white flex items-center px-4 border-b border-gray-200 shrink-0">
        <WindowControls target="contact" />
        <div className="flex-1 text-center">
          <p className="text-sm font-medium text-gray-700">Contact Me</p>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="Adrian"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>

        <p className="text-sm">contact@jsmastery.pro</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
