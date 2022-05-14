import keeper from "../assister/keeper.png";
import PanwarCloth from "../assister/panwarCloth.jpg";

export const projectData = [
  {
    id: 3000,
    title: "Panwar Cloth",
    imgUrl: `${PanwarCloth}`,
    overview: `This is my small online clothes shop. Want to buy budget clothes. Here you got branded clothes at a low price. Go to checkout my shop, and "click" the live button.  
    This project was created by these tools-kits: React, Redux-toolkit, Redux-persist, firebase,  and Styled-components.
    `,
    tools: {
      first: "styled-components",
      second: "Next.js",
      third: "Redux",
    },
    source: "https://github.com/anujpanwar01/panwar-cloth",
    netlify: "https://panwar-cloth-anujpanwar.netlify.app/",
  },
  {
    id: 1000,
    title: "Keeper App",
    imgUrl: `${keeper}`,
    overview:
      "Some Times we forget important tasks or notes that matter for that I created this app you can add important notes and photos stuff and your data is stored till then here when do not do manually delete. I created this app with the help of these tools:- Redux-toolkit,  SCSS, Firebase, Redux-Persist.",
    tools: {
      first: "Html",
      second: "React",
      third: "Redux-toolkit",
    },

    source: "https://github.com/anujpanwar01/keeper",
    netlify: "https://keeperapp-anujpanawar.netlify.app/",
  },

  {
    id: 10,
    title: "Bhagirathi Travels",
    imgUrl:
      "https://pbs.twimg.com/media/FNo1e--UYAsecBk?format=jpg&name=medium",

    overview:
      "Hey, do you want to come to Uttarkhand for vacation? Let's book your car and enjoy Uttarkhand with your family & friends. In Bhagirathi Travel you find some cool offers to explore Uttarkhand like Mountains, waterfalls, lakes, and other amazing things. Don't forget to book your slot today.",

    tools: {
      first: "Html",
      second: "Scss",
      third: "JavaScript",
    },
    source: "https://github.com/anujpanwar01/Bhagirathi-Travels",
    netlify: "https://bhagirathi-travel-anujpanwar.netlify.app/",
  },
];
