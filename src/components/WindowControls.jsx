import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div id="window-controls" className="flex gap-2 group z-50 relative">
      <button
        className="close w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer flex items-center justify-center group-hover:after:content-['x'] group-hover:after:text-[8px] group-hover:after:text-black/50 group-hover:after:font-bold outline-none"
        onClick={(e) => {
          e.stopPropagation();
          closeWindow(target);
        }}
        aria-label="Close"
      />
      <button
        className="minimize w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer flex items-center justify-center group-hover:after:content-['-'] group-hover:after:text-[8px] group-hover:after:text-black/50 group-hover:after:font-bold outline-none"
        onClick={(e) => {
          e.stopPropagation();
          minimizeWindow(target);
        }}
        aria-label="Minimize"
      />
      <button
        className="maximize w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer flex items-center justify-center group-hover:after:content-['+'] group-hover:after:text-[8px] group-hover:after:text-black/50 group-hover:after:font-bold outline-none"
        onClick={(e) => {
          e.stopPropagation();
          maximizeWindow(target);
        }}
        aria-label="Maximize"
      />
    </div>
  );
};

export default WindowControls;
