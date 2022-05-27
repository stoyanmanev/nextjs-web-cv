import { User } from "../interfaces/User";

export const user: User = {
  fullname: "Stoyan Manev",
  position: "Web Designer",
  eMail: "stoyan.manev.bsn@gmail.com",
  img: "/main_photo.jpg",
  phone: "+359 87 902 2343",
  residence: "Bulgaria",
  address: 'ul. "Ilarion Makariopolski" 4000 Kamenitsa 1, Plovdiv',
  googleIframe:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.22995681631!2d24.7600977!3d42.1453657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1a0ea5423df%3A0xc67bc07450fea7f0!2z0YPQuy4g4oCe0JjQu9Cw0YDQuNC-0L0g0JzQsNC60LDRgNC40L7Qv9C-0LvRgdC60LjigJwgMSwgNDAwMCDQmtCw0LzQtdC90LjRhtCwIDEsINCf0LvQvtCy0LTQuNCy!5e0!3m2!1sbg!2sbg!4v1653239024584!5m2!1sbg!2sbg",
  age: 23,
  form: true,
  social: {
    linkenid:
      "https://bg.linkedin.com/in/stoyan-manev-137913186?trk=people-guest_people_search-card",
    facebook: "https://www.facebook.com/stoyan.manev.39",
    github: "https://github.com/stoyanmanev",
    twitter: "",
  },
  documents: {
    cv: "/some_cv.pdf",
  },
  facts: [
    {
      name: "Happy Clients",
      value: 14,
    },
    {
      name: "Working Hours",
      value: 980,
    },
    {
      name: "Awards Won",
      value: 3,
    },
    {
      name: "Java",
      value: 7,
    },
    {
      name: "Javascript",
      value: 171,
    },
    {
      name: "React",
      value: 93,
    },
    {
      name: "NodeJs",
      value: 11,
    },
    {
      name: "Another Projects",
      value: 339,
    },
  ],
  personalPath: [
    {
      headline: "Education",
      pieces: [
        {
          year: "2008",
          location: "University of Studies",
          type: "Frontend Development",
          description:
            "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
        },
        {
          year: "2007",
          location: "University of Studies",
          type: "Graphic Design",
          description:
            "Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.",
        },
      ],
    },
    {
      headline: "Experience",
      pieces: [
        {
          year: "2016 - Current",
          location: "Google",
          type: "Lead Ui/Ux Designer",
          description:
            "Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.",
        },
        {
          year: "2013 - 2016",
          location: "Adobe",
          type: "Senior Ui/Ux Designer",
          description:
            "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
        },
        {
          year: "2011 - 2013",
          location: "Google",
          type: "Junior Ui/Ux Designer",
          description:
            "Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.",
        },
      ],
    },
  ],
  abilities: {
    knowledges: [
      { type: "Marketing" },
      { type: "Print" },
      { type: "Digital Design" },
      { type: "Social Media" },
      { type: "Time Management" },
      { type: "Communication" },
      { type: "Problem-Solving" },
      { type: "Social Networking" },
      { type: "Flexibility" },
    ],

    skills: [
      {
        name: "Design",
        list: [
          { type: "Web Design", value: 95 },
          { type: "Print Design", value: 65 },
          { type: "Logo Design", value: 80 },
          { type: "Graphic Design", value: 90 },
        ],
      },
      {
        name: "Coding",
        list: [
          { type: "JavaScript", value: 95 },
          { type: "PHP", value: 85 },
          { type: "HTML/CSS", value: 100 },
          { type: "Smarty/Twig", value: 75 },
          { type: "Perl", value: 90 },
        ],
      },
    ],
  },
  blog: [
    {
      title: "Why I Switched to Sketch For UI Design",
      category: "Design",
      date: "05 Mar 2020",
      image: "/blog_post_1.jpg",
      keywords: ["animate", "bar", "design", "progress", "ui"],
      createdBy: "Stoyan Manev",
      description:
        "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem. Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
    },
    {
      title: "Best Practices for Animated Progress Indicators",
      category: "UI",
      date: "23 Feb 2020",
      image: "/blog_post_1.jpg",
      keywords: ["animate", "ui"],
      createdBy: "Stoyan Manev",
      description:
        "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem. Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
    },
    {
      title: "Designing the Perfect Feature Comparison Table",
      category: "Design",
      date: "06 Feb 2021",
      image: "/blog_post_1.jpg",
      keywords: ["design", "progress"],
      createdBy: "Stoyan Manev",
      description:
        "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem. Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
    },
    {
      title: "An Overview of E-Commerce Platforms",
      category: "UI",
      date: "07 Jan 2020",
      image: "/blog_post_1.jpg",
      keywords: ["animate", "progress", "ui"],
      createdBy: "Stoyan Manev",
      description:
        "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem. Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
    },
  ],
  portfolio: [
    {
      name: "Overtime Web App",
      category: "webapp",
      image: "/client-overtime-social_branding.png",
      link: "https://client-app-overtime.herokuapp.com/",
    }
  ],
  description:
    "Fusce vel dui placerat, accumsan lacus sit amet, tempor massa. In finibus quam id enim aliquam, vel commodo orci imperdiet. Proin eget convallis nibh, at interdum urna. Sed eu tempus felis. Etiam accumsan, tortor sed euismod luctus, est neque gravida urna, at consectetur libero ligula nec dui. Sed vitae ante fermentum, ultrices purus eu, ultrices nulla. Pellentesque consequat suscipit ante. Nam mollis ac orci vitae ornare. Etiam auctor felis vel tristique euismod. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac sagittis sapien, nec commodo eros. Etiam non tortor condimentum, consequat lorem ac, posuere urna. Maecenas eget diam tincidunt, volutpat leo quis, volutpat lectus.",
};
