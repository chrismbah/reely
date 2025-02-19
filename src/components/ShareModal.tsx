import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";
import { FiX } from "react-icons/fi";
import { FaPaperclip } from "react-icons/fa6";
const ShareModal = ({
  shareUrl,
  onClose,
}: {
  shareUrl: string;
  onClose: VoidFunction;
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  const shareOptions = [
    {
      name: "Share to Instagram Stories",
      icon: "📸",
      action: () => {},
      className: "instagram-story",
    },
    {
      name: "Copy Link",
      icon: <FaPaperclip className="text-white" size={24} />,
      action: copyToClipboard,
      className: "copy-link",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-end sm:items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full sm:w-[400px] bg-black rounded-t-xl sm:rounded-xl overflow-hidden"
        >
          {/* Header */}
          <div className="relative border-b border-gray-200">
            <h2 className="text-center py-4 font-semibold">Share</h2>
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <FiX size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Quick Share Options */}
          <div className="p-4 border-b border-gray-200">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className="w-full flex items-center gap-4 p-3 hover:bg-white/10 hover:backdrop-blur-md rounded-lg transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center">
                  {option.icon}
                </span>
                <span className="text-sm font-medium">{option.name}</span>
              </button>
            ))}
          </div>

          {/* Social Share Buttons */}
          <div className="grid grid-cols-4 gap-4 p-6">
            <FacebookShareButton url={shareUrl}>
              <div className="flex flex-col items-center gap-2">
                <FacebookIcon size={45} round />
                <span className="text-xs text-gray-400 hover:text-gray-200">
                  Facebook
                </span>
              </div>
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl}>
              <div className="flex flex-col items-center gap-2">
                <TwitterIcon size={45} round />
                <span className="text-xs text-gray-400 hover:text-gray-200">
                  Twitter
                </span>
              </div>
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl}>
              <div className="flex flex-col items-center gap-2">
                <WhatsappIcon size={45} round />
                <span className="text-xs text-gray-400 hover:text-gray-200">
                  WhatsApp
                </span>
              </div>
            </WhatsappShareButton>

            <TelegramShareButton url={shareUrl}>
              <div className="flex flex-col items-center gap-2">
                <TelegramIcon size={45} round />
                <span className="text-xs text-gray-400 hover:text-gray-200">
                  Telegram
                </span>
              </div>
            </TelegramShareButton>

            <LinkedinShareButton url={shareUrl}>
              <div className="flex flex-col items-center gap-2">
                <LinkedinIcon size={45} round />
                <span className="text-xs text-gray-400 hover:text-gray-200">
                  LinkedIn
                </span>
              </div>
            </LinkedinShareButton>

            <EmailShareButton url={shareUrl}>
              <div className="flex flex-col items-center gap-2">
                <EmailIcon size={45} round />
                <span className="text-xs text-gray-400 hover:text-gray-200">
                  Email
                </span>
              </div>
            </EmailShareButton>
          </div>

          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="w-full p-4 text-center text-sm font-medium text-red-500 border-t border-gray-200 hover:bg-white/10 hover:backdrop-blur-md transition-colors"
          >
            Cancel
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShareModal;
