import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
const Social = () => {
  return (
    <div className="relative">
      {/* Icons */}
      <div className="hidden md:flex flex-col gap-4 w-[24px] my-[2rem]">
        <FacebookIcon className="text-gray-800 hover:scale-[1.5]" />
        <TwitterIcon className="text-gray-800 hover:scale-[1.5]" />
        <InstagramIcon className="text-gray-800 hover:scale-[1.5]" />
        <LinkedInIcon className="text-gray-800 hover:scale-[1.5]" />
        <WhatsAppIcon className="text-gray-800 hover:scale-[1.5]" />
        <PhoneIcon className="text-gray-800 hover:scale-[1.5]" />
      </div>
    </div>
  );
};

export default Social;
