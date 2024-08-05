import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const DownloadPDF = () => {
  return (
    <motion.button className="mx-auto" whileTap={{ scale: 0.85 }}>
      <div className="p-2 pl-6 flex flex-row justify-between items-center border border-[cadetblue] rounded-full cursor-pointer">
        <div>Download PDF</div>
        <Button variant="link">
          <Download />
        </Button>
      </div>
    </motion.button>
  );
};

export default DownloadPDF;
