type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "lpatipat@icloud.com",
  title: "Hey, I’m Patrick 👋",
  // profile: "/profile.webp",
  description:
    "I'm a U.S. based dev with a lot of curiosities. Check out my work and the fun widgets of this site. It's made with a lot of love ❤️",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/patipatLu",
    },
    {
      label: "Github",
      link: "https://github.com/twopats",
    },
  ],
};

export default presentation;
