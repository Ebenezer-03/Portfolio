import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { blogPosts } from "@/constants";
import { ChevronLeft, ChevronRight, MoveRight, PanelLeft, Plus, Search, ShieldHalf, Share, Copy, RotateCw } from "lucide-react";

const Safari = () => {
    return (
        <div className="w-[800px] h-[500px] bg-white flex flex-col font-sans text-gray-900">
            {/* Header / Toolbar */}
            <div id="window-header" className="h-11 bg-[#f3f3f3] flex items-center px-3 gap-4 border-b border-[#d1d1d1] shrink-0 drag-handle">
                <div className="flex items-center gap-3">
                    <WindowControls target="safari" />
                    <div className="flex items-center gap-3 ml-2">
                        <PanelLeft className="w-4 h-4 text-gray-500 cursor-pointer hover:text-black transition-colors" />
                        <div className="flex items-center gap-2 text-gray-400">
                            <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
                            <ChevronRight className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Address Bar */}
                <div className="flex-1 flex items-center justify-center px-4">
                    <div className="bg-white border border-[#d1d1d1] rounded-md h-7 w-full max-w-lg flex items-center px-2 gap-2 shadow-sm group focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                        <ShieldHalf className="w-3 h-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="flex-1 bg-transparent outline-none text-xs text-gray-700 placeholder:text-gray-400 text-center group-focus-within:text-left transition-all"
                        />
                        <RotateCw className="w-3 h-3 text-gray-400 cursor-pointer hover:text-black transition-colors" />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 text-gray-500">
                    <Share className="w-3.5 h-3.5 cursor-pointer hover:text-black transition-colors" />
                    <Plus className="w-3.5 h-3.5 cursor-pointer hover:text-black transition-colors" />
                    <Copy className="w-3.5 h-3.5 cursor-pointer hover:text-black transition-colors" />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
                <div className="max-w-2xl mx-auto p-8">
                    <h2 className="text-3xl font-bold text-[#ff2d55] mb-10 text-center tracking-tight">Work Experience and Certifications</h2>

                    <div className="grid gap-6">
                        {blogPosts.map(({ id, image, title, date, link }) => (
                            <div key={id} className="group flex items-start gap-6 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default">
                                {/* Image */}
                                <div className="w-32 h-20 shrink-2 rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100 relative mt-1">
                                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{date}</p>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-medium text-blue-500 hover:text-blue-600 hover:gap-1.5 transition-all"
                                    >
                                        Show Credentials
                                        <MoveRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
