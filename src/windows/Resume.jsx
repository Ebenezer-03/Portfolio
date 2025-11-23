import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <>
            <div id="window-header" className="drag-handle">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a
                    href="files/resume.pdf"
                    download
                    className="cursor-pointer"
                    title="Download Resume"
                >
                    <Download className="icon" />
                </a>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 bg-gray-50 flex justify-center">
                <Document file="files/resume.pdf">
                    <Page
                        pageNumber={1}
                        renderTextLayer
                        renderAnnotationLayer
                        width={550}
                    />
                </Document>
            </div>

        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
