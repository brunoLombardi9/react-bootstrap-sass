const constants = {
  topNav: {
    options: ["Home", "About", "Contact", "Blog", "Carees"],
    hamburguerButton: "../icon-hamburger.svg",
    closeButton: "../icon-close.svg"
  },

  heroSection: {
    title: "Next generation digital banking",
    description:
      "Take your financial life online. Your will be one-stop-shop for spending saving, budgeting, investing and much more.",
    backgroundMobile: "../bg-intro-mobile.svg",
    backgroundDesktop: "../bg-intro-desktop.svg",
    mockups: "../image-mockups.png",
  },

  whyChoose: {
    title: "Why choose Easybank?",
    description:
      "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
    features: [
      {
        icon: "../icon-online.svg",
        title: "Online Banking",
        description:
          "Our modern web and mobile applications allow you to keep track of your finances whereve you are in the world.",
      },
      {
        icon: "../icon-budgeting.svg",
        title: "Simple Budgeting",
        description:
          "See exactly where your money goes each month. Recive notifications when you ´re close to hitting your limits.",
      },
      {
        icon: "../icon-onboarding.svg",
        title: "Fast Onboarding",
        description:
          "We don´t do branches. Open your account in minutes online and start taking control of your finances right away.",
      },
      {
        icon: "../icon-api.svg",
        title: "Open API",
        description:
          "Manage your savings, investments, pension, and much more from one account. Tracking your money never has been easier.",
      },
    ],
  },

  latestArticles: {
    title: "Latest Articles",
    articles: [
      {
        picture: "../image-currency.jpg",
        author: "Claire Robinson",
        title: "Recieve money in any currency with no fees",
        description:
          "The world is getting smaller and we´re getting more mobile, So why should you be forced to only recieve money in a single...",
      },
      {
        picture: "../image-restaurant.jpg",
        author: "Wilson Hutton",
        title: "Treat yoursetf without worrying about money",
        description:
          "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
      },
      {
        picture: "../image-plane.jpg",
        author: "Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        description:
          "We want you to enjoy your travels. This is why we don´t charge any tees on purchases while you´re abroad. Well even show you",
      },
      {
        picture: "../image-confetti.jpg",
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        description:
          "After a lot of hard work by the whole team. we•re excited to launch our closed beta. It's easy to request an invite through the site",
      },
    ],
  },
  footer: {
    socialMedia: [
      { icon: "../icon-facebook.svg", url: "https://www.facebook.com/" },
      { icon: "../icon-youtube.svg", url: "https://www.youtube.com/" },
      { icon: "../icon-twitter.svg", url: "https://twitter.com/" },
      { icon: "../icon-pinterest.svg", url: "https://www.pinterest.com" },
      { icon: "../icon-instagram.svg", url: "https://www.instagram.com/" },
    ],
    sections: [
      "About Us",
      "Contact",
      "Blog",
      "Careers",
      "Support",
      "Privacy Policy",
    ],
    text: "ⓒ Easybank. All Rights Reserved",
  },
  logo: "../logo.svg",
  requestButton: "Request Invite",
};

export default constants;
