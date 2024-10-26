import { CiInstagram, CiLinkedin, CiYoutube,CiTwitter } from "react-icons/ci";

export const Sconfig = [
  {
    title: "Twitter Threads",
    icon: <CiTwitter className="w-10 h-10 mb-4 text-blue-400" />,
    description:
      "Craft engaging Twitter threads that keep your audience hooked and amplify your impact.",
  },
  {
    title: "Instagram Captions",
    icon: (
      <CiInstagram className="w-10 h-10 mb-4 text-pink-400" />
    ),
    description:
      "Craft irresistible Instagram captions that captivate your audience and grow your followers.",
  },
  {
    title: "LinkedIn Posts",
    icon: <CiLinkedin className="w-10 h-10 mb-4 text-blue-600" />,
    description:
      "Build powerful LinkedIn posts that showcase your expertise and expand your professional network.",
  }, 
  {
    title: "YouTube Script",
    icon: <CiYoutube className="w-10 h-10 mb-4 text-red-500" />,
    description:
      "Create captivating YouTube content that draws in viewers and keeps them coming back.",
  },
]