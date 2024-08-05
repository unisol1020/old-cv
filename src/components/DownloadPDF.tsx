import { Download } from "lucide-react";
import { Button } from "./ui/button";

const DownloadPDF = () => {
  return (
    <div className="group p-2 pl-6 flex flex-row justify-between mx-auto items-center border border-[cadetblue] rounded-full cursor-pointer">
      <div>Download PDF</div>

      <Button variant="link" className="group-hover:animate-bounce">
        <Download />
      </Button>
    </div>
  );
};

export default DownloadPDF;
