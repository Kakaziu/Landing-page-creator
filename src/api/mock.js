export const pageData = [
  {
    id: 1,
    attributes: {
      title: 'Página 1',
      slug: 'page-1',
      footer_text: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: 'footer',
            },
          ],
        },
      ],
      sections: [
        {
          id: 1,
          __component: 'section.section-two-columns',
          title: 'Section two columns',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu porttitor augue, ut auctor sem. Cras rhoncus pellentesque ante non pharetra. Maecenas pretium consectetur sapien pellentesque rutrum. Aliquam vitae tempor purus, at rhoncus orci. Suspendisse a sem non dolor sagittis mattis.',
          image: {
            data: {
              id: 1,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/drplqaxi0/image/upload/v1704251425/pexels_angel_rondon_19483671_99d3895603.jpg',
              },
            },
          },
          button: {
            id: 1,
            text_button: 'Clique aqui',
            url: '#',
            size: 'big',
          },
          metadata: {
            id: 1,
            name: 'section-two-columns-1',
            section_id: 'hero',
            background: true,
          },
        },
        {
          id: 2,
          __component: 'section.section-two-columns',
          title: 'Sobre',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu porttitor augue, ut auctor sem. Cras rhoncus pellentesque ante non pharetra. Maecenas pretium consectetur sapien pellentesque rutrum. Aliquam vitae tempor purus, at rhoncus orci. Suspendisse a sem non dolor sagittis mattis.',
          image: {
            data: {
              id: 1,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/drplqaxi0/image/upload/v1704251425/pexels_angel_rondon_19483671_99d3895603.jpg',
              },
            },
          },
          button: null,
          metadata: {
            id: 2,
            name: 'section-two-columns-2',
            section_id: 'sobre',
            background: false,
          },
        },
        {
          id: 1,
          __component: 'section.section-grid',
          title: 'grid',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu porttitor augue, ut auctor sem. Cras rhoncus pellentesque ante non pharetra. Maecenas pretium consectetur sapien pellentesque rutrum. Aliquam vitae tempor purus, at rhoncus orci. Suspendisse a sem non dolor sagittis mattis.',
          button: {
            id: 3,
            text_button: 'aaaaa clica',
            url: '#',
            size: 'big',
          },
          metadata: {
            id: 3,
            name: 'grid-1',
            section_id: 'depoimentos',
            background: true,
          },
          text_grid: [
            {
              id: 1,
              title: 'grid 1',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.',
            },
            {
              id: 2,
              title: 'grid 2',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.',
            },
            {
              id: 3,
              title: 'grid 3',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.',
            },
          ],
          image_grid: [],
        },
        {
          id: 1,
          __component: 'section.section-content',
          title: 'contato',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ',
                },
                {
                  type: 'text',
                  text: 'ipsum dolor sit amet',
                  bold: true,
                },
                {
                  type: 'text',
                  text: ', consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.',
                },
              ],
            },
          ],
          button: {
            id: 4,
            text_button: 'botao',
            url: '#',
            size: 'big',
          },
          metadata: {
            id: 4,
            name: 'section-content',
            section_id: 'contato',
            background: true,
          },
        },
        {
          id: 1,
          __component: 'section.section-box',
          title: 'Section Box',
          button: null,
          paragraph: [
            {
              id: 1,
              text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            },
            {
              id: 2,
              text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            },
            {
              id: 3,
              text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            },
          ],
          section_metadata: {
            id: 5,
            name: 'section_box',
            section_id: 'vvvvvv',
            background: false,
          },
        },
      ],
      menu: {
        id: 1,
        logo_title: 'logo',
        logo_link: '#',
        image_logo: {
          data: {
            id: 1,
            attributes: {
              url: 'a.svg',
            },
          },
        },
        menu_links: [
          {
            id: 1,
            text: 'Home',
            url: '#home',
            open_in_new_tab: false,
          },
          {
            id: 2,
            text: 'Sobre',
            url: '#sobre',
            open_in_new_tab: false,
          },
          {
            id: 3,
            text: 'Depoimentos',
            url: '#depoimentos',
            open_in_new_tab: false,
          },
          {
            id: 4,
            text: 'Contato',
            url: '#contato',
            open_in_new_tab: false,
          },
        ],
      },
    },
  },
];

export const dataMenu = {
  id: 1,
  logo_title: 'logo',
  logo_link: '#',
  image_logo: {
    data: {
      id: 1,
      attributes: {
        url: 'a.svg',
      },
    },
  },
  menu_links: [
    {
      id: 1,
      text: 'Home',
      url: '#home',
      open_in_new_tab: false,
    },
    {
      id: 2,
      text: 'Sobre',
      url: '#sobre',
      open_in_new_tab: false,
    },
    {
      id: 3,
      text: 'Depoimentos',
      url: '#depoimentos',
      open_in_new_tab: false,
    },
    {
      id: 4,
      text: 'Contato',
      url: '#contato',
      open_in_new_tab: false,
    },
  ],
};

export const menuLinks = [
  {
    id: 1,
    text: 'Home',
    url: '#home',
    open_in_new_tab: false,
  },
  {
    id: 2,
    text: 'Sobre',
    url: '#sobre',
    open_in_new_tab: false,
  },
  {
    id: 3,
    text: 'Depoimentos',
    url: '#depoimentos',
    open_in_new_tab: false,
  },
  {
    id: 4,
    text: 'Contato',
    url: '#contato',
    open_in_new_tab: false,
  },
];

export const sectionTwoColumnsMock = {
  id: 1,
  __component: 'section.section-two-columns',
  title: 'Section two columns',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu porttitor augue, ut auctor sem. Cras rhoncus pellentesque ante non pharetra. Maecenas pretium consectetur sapien pellentesque rutrum. Aliquam vitae tempor purus, at rhoncus orci. Suspendisse a sem non dolor sagittis mattis.',
  image: {
    data: {
      id: 1,
      attributes: {
        alternativeText: 'image',
        url: 'b.svg',
      },
    },
  },
  button: {
    id: 1,
    text_button: 'Clique aqui',
    url: '#',
    size: 'big',
  },
  metadata: {
    id: 1,
    name: 'section-two-columns-1',
    section_id: 'hero',
    background: true,
  },
};

export const sectionBoxMock = {
  id: 1,
  __component: 'section.section-box',
  title: 'Section Box',
  button: null,
  paragraph: [
    {
      id: 1,
      text: 'paragraph',
    },
    {
      id: 2,
      text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: 3,
      text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ],
  section_metadata: {
    id: 5,
    name: 'section_box',
    section_id: 'vvvvvv',
    background: false,
  },
};
