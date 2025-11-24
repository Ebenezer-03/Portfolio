import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const ImgFile = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    return (
        <>
            <div id="imgfile-header" className="drag-handle h-9 bg-white flex items-center px-4 border-b border-gray-200 shrink-0">
                <WindowControls target="imgfile" />
                <div className="flex-1 text-center">
                    <p className="text-sm font-medium text-gray-700">{data.name}</p>
                </div>
            </div>

            <div className="bg-gray-50 overflow-auto flex items-center justify-center p-6">
                <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="max-w-[80vw] max-h-[70vh] object-contain shadow-xl rounded-lg"
                />
            </div>
        </>
    );
};

const ImgFileWindow = WindowWrapper(ImgFile, "imgfile");

export default ImgFileWindow;
