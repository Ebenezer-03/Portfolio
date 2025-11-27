import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { techStack } from "#constants";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
    return (
        <div className="w-[600px] h-[420px] bg-[#1e1e1e]/95 backdrop-blur-md text-[#4af626] font-mono text-[13px] flex flex-col shadow-2xl">
            {/* Header */}
            <div id="window-header" className="h-9 bg-[#2d2d2d]/90 flex items-center px-4 relative border-b border-[#3a3a3c] shrink-0 drag-handle">
                <WindowControls target="terminal" />
                <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-400 font-sans text-[13px] font-medium tracking-wide">Tech Stack</h2>
            </div>

            {/* Content */}
            <div className="p-5 overflow-y-auto flex-1 custom-scrollbar">
                {/* Command Line */}
                <div className="mb-6 font-medium">
                    <p>
                        <span className="text-white font-bold mr-2">@Ebenezer %</span>
                        <span className="text-[#4af626]">show tech stack</span>
                    </p>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-[140px_1fr] mb-3 text-gray-400 border-b border-gray-600/50 pb-2 border-dashed">
                    <p className="font-medium">Category</p>
                    <p className="font-medium">Technologies</p>
                </div>

                {/* Tech Stack List */}
                <ul className="space-y-3 mb-6">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="grid grid-cols-[140px_1fr] items-start group hover:bg-white/5 rounded px-1 -mx-1 transition-colors">
                            <div className="flex items-center gap-2 text-[#4af626] font-bold">
                                <Check size={14} strokeWidth={3} />
                                <h3>{category}</h3>
                            </div>
                            <div className="text-gray-300 font-medium">
                                {items.join(", ")}
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-gray-600/50 border-dashed pt-3 mt-auto space-y-1.5 opacity-80">
                    <p className="flex items-center gap-2 text-[#4af626] font-medium">
                        <Check size={14} strokeWidth={3} />
                        {techStack.length} of {techStack.length} stacks loaded successfully (100%)
                    </p>

                    <p className="flex items-center gap-2 text-gray-400">
                        <Flag size={14} />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </div>
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
