import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const TxtFile = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    return (
        <>
            <div id="txtfile-header" className="drag-handle h-9 bg-white flex items-center px-4 border-b border-gray-200 shrink-0">
                <WindowControls target="txtfile" />
                <div className="flex-1 text-center">
                    <p className="text-sm font-medium text-gray-700">{data.name}</p>
                </div>
            </div>

            <div className="bg-white w-[700px] h-[500px] overflow-y-auto p-8 flex-shrink-0">
                {data.image && (
                    <div className="mb-4 flex justify-center">
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-32 h-32 rounded-full object-cover shadow-lg"
                        />
                    </div>
                )}

                {data.subtitle && (
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        {data.subtitle}
                    </h2>
                )}

                <div className="space-y-3">
                    {data.description?.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-gray-700 leading-relaxed"
                            style={{ textAlign: 'justify', textJustify: 'inter-word' }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");

export default TxtFileWindow;
