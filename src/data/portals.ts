export type PortalData = {
  title: string;
  titleColor: string;
  bgPath: string;
  externalLink: string;
  extraStyling?: string;
};

export const MY_PORTALS: PortalData[] = [
  {
    title: "Twitter",
    titleColor: "",
    bgPath: "/x-twitter.gif",
    externalLink: "https://twitter.com/patipatLu",
  },
  {
    title: "Github",
    titleColor: "",
    bgPath: "/github.jpeg",
    externalLink: "https://github.com/twopats",
  },
  {
    title: "2pats.eth",
    titleColor: "",
    bgPath: "/eth.gif",
    externalLink: "https://app.ens.domains/2pats.eth",
  },
  {
    title: "discord",
    titleColor: "",
    bgPath: "/discord.jpeg",
    externalLink: "https://discord.com/users/121586011355611136",
    extraStyling: "bg-[#5865F2]",
  },
];
