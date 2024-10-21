import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const DownloadPDF = () => {
  return (
    <motion.a
      href="/Max_Levchuk_CV.pdf"
      download="Max_Levchuk_CV.pdf"
      className="mx-auto"
      whileTap={{ scale: 0.85 }}
    >
      <Button variant="outline" size="lg">
        <span className="mr-2">Download PDF</span> <Download />
      </Button>
    </motion.a>
  );
};

export default DownloadPDF;
