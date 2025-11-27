import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "@/components/WindowControls";
import { socials } from "@/constants";

const Contact = () => {
  return (
    <div className="flex flex-col h-full relative">
      {/* Header */}
      <div className="window-header drag-handle shrink-0">
        <WindowControls target="contact" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center p-6 pt-2 space-y-6 text-center">

        {/* Profile */}
        <div className="flex flex-col items-center space-y-2">
          <div className="p-1 rounded-full border-2 border-white/30 shadow-lg">
            <img
              src="/images/me.jpeg"
              alt="Ebenezer S"
              className="w-20 h-20 rounded-full object-cover border-2 border-white/50"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">Ebenezer S</h3>
            <p className="text-xs text-blue-100/80 font-medium max-w-[200px] leading-tight mt-1">
              "Got an idea? A bug to squash? Or just wanna talk tech? I'm in."
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {[
            { label: "Projects", value: "7" },
            { label: "Repositories", value: "20" },
            { label: "Commits", value: "192" },
          ].map((stat) => (
            <div key={stat.label} className="bg-blue-500/20 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col items-center justify-center shadow-lg hover:bg-blue-500/30 transition-colors cursor-default">
              <span className="text-lg font-bold text-white">{stat.value}</span>
              <span className="text-[10px] text-blue-100 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {socials.filter(s => s.text === "Github" || s.text === "LinkedIn").map(({ id, text, icon, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500/20 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-lg hover:bg-blue-500/30 transition-all hover:scale-105 group"
            >
              <img src={icon} alt={text} className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100" />
              <span className="text-sm font-medium text-white opacity-90 group-hover:opacity-100">{text}</span>
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="mailto:ebenezer.s.2007@gmail.com"
          className="w-full bg-white text-blue-600 font-bold py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          Contact me
        </a>

      </div>
    </div>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
