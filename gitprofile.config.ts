// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'haiduong0097', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/haiduong0097/haiduong0097.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/haiduong0097/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['haiduong0097/my-project1', 'haiduong0097/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['haiduong0097/gitprofile'], // List of repository names to display. example: ['haiduong0097/my-project1', 'haiduong0097/my-project2']
      },
    },
    external: {
      header: 'Recent Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'ODC Project - C1S',
          description:
            'Hệ thống website thương mại điện tử thị trường chip máy tính và đồ điện tử, quản lý kho hàng và đơn hàng, xử lý các tác nghiệp tìm kiếm và phân tích dữ liệu của thị trường để đưa ra sản phẩm có thể bán chạy.',
          imageUrl:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA8FBMVEX////v7/T5+fv//vr//+399tX99dD++N3+/PTo6O+ZmrmNjrJub5uztMv98sT75YX52k/40y/2zA32yACjpMBLTYQvMXA0NnRoapfHx9j877T75or87Kf510D/zwDe3+hTVYlDRX5ydJ/IvJb76pnT1OGChKpfYZE2OHVWV4p6e6SQkbMoKWv632f/75q6u9AtL27/6HglKXKOgWYtMXtTTmLMqBKymTwvMndPS2a7nCNBQGo8PHG0lij/1gDatRSehjVoXValiB/s2pCvrLNdVV1XWpaAb0jhuBCLjrs/QYX53V95a0t6cGl7a0Hs5chRpPMTAAAB70lEQVR4AcWS14KbMBBFh+YOa5qEHC8YYozAuPdetvf//5sIrPQ8Zw+dA3cGJPi/CKIoAEeSlUJBKZZ+9eVKtVJT80dKRe2qrhumcVX6xVtVG2HkEEFWGl+aMoBybbraD+9ZLd/HGCMcfG0zm9Ew3AbXYtiJAoQpxTSOapYHOU3DLcCFMOnaiGmURh4QO1bLwOiZOs9SK9Hldb+lAlQQogERoaibfSlvbxD4NvN0GKssXKilLMrvhKM8IPO1IPcYVYAx8FF2MZ6YbhMyrE6N5TOwnxABoDvMrqazubvIWgkrAUaUk0ZlKDspO1uu1u56s6yKQCLbx9zjtMsrLLe7/WG2TGOPJaY/ApBNsmtMp5ujezgtaRIQgLDjpzwiDUTwoiGdrs575uO4Ssp528l2mFfAFQCV4ulqnXkaVS3IKd3cOkPEKrQIiNV0eprv13dLnCQh9+0meJU4xXmFe/Tw6O5WY6fW9eCC1iuxfVj10yQkT6ujYR43z3FshSIPeGlAhkgS+zl+mLuHV/pMg4oHnIZe+jFl3s4s/m45drqqCJxSvQ4cpffoPr5vx3YSDH54kA1duiS96KY7+qgubdsZCPAD2TXr7Wb75dowzZ5WAiEMCRHhJzIThpHtMv0PpL5hMltvF/7SHKmoKEpRhs/jGzW1Q8xwwgjsAAAAAElFTkSuQmCC',
          link: 'https://www.chip1stop.com/USA/en',
        },
        {
          title: 'E-Sale MS JP',
          description:
            'Xây dựng hệ thống CRM cho các doanh nghiệp. Phát triển phase 1: phát triển mới các service employees, customers, products, schedules, calendar, import data … theo mô hình micro service.',
          imageUrl: 'https://ledoduyan.com/mp-up/2017/09/crm.png',
          link: '#',
        },
        {
          title: 'ODC Project - BETU',
          description:
            'Hệ thống cá cược thể thao, thể thao điện tử, casino trực tuyến. (Được cấp chứng chỉ hoạt động tại nước ngoài, khóa ip với các quốc gia chưa cho phép hoạt động, bao gồm Việt Nam)',
          imageUrl:
            'https://lh3.google.com/u/0/d/1K787K2auceTU0R4bzv0S3FTnG3RuIJ5S=w1920-h929-iv1',
          link: 'https://ubet.io/',
        },
        {
          title: 'Rapport Management System',
          description:
            'Dự án về hệ thống quản lý nhân sự, quản lý lương thưởng. Migrate từ Firebase sang Java Springboot.',
          imageUrl:
            'https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f48153e-272c-40a9-99fa-42547dacbc4a%2Fimg_logo_rapportlabs_white_(1).png&blockId=39ef240a-d85e-4c3a-83eb-7706adb34b8b&width=256',
          link: 'https://www.rapportlabs.kr/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Dương Nguyễn',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: 'duongnh1997',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: 'haiduongnguyen0097_1',
    telegram: 'haiduongnguyen',
    website: '',
    phone: '+84 934 388 559',
    email: 'haiduongnguyen0097@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/12rR5IkmPGMFsHXkqM6AXGb_dfldKl9ra/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Spring',
    'JavaScript',
    'React.js',
    'Node.js',
    'NextJS',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'MUI',
  ],
  experiences: [
    {
      company: 'SOTA TEK ., JSC',
      position: 'Lead Developer | Project Manager',
      from: '04/2021',
      to: 'Hiện tại',
      companyLink: 'https://www.sotatek.com/',
    },
    {
      company: 'Luvina Software JSC',
      position: 'Developer | Sub-lead Developer',
      from: '12/2018',
      to: '03/2021',
      companyLink: 'https://luvina.net/vi',
    },
    {
      company: 'Luvina Software JSC',
      position: 'Fresher Delveloper',
      from: '08/2018',
      to: '11/2018',
      companyLink: 'https://academy.luvina.net/',
    },
  ],
  certifications: [
    {
      name: 'Chứng chỉ PM4P cho tầng quản lý cấp trung',
      body: 'Sotatek',
      year: '2023',
      link: 'https://lh3.google.com/u/0/d/1UM1zpQcKbHTVfMNtpoDRDSyA3m2FjIzE=w707-h911-iv1',
    },
    {
      name: 'English communication cource for IT-ers',
      body: 'Sotatek',
      year: '2023',
      link: 'https://lh3.google.com/u/0/d/11rpGECmjL0zAkP8kDrAfq5l2iUsQKIt5=w958-h911-iv1',
    },
    {
      name: 'Dream team of the year',
      body: 'Sotatek | BETU - ODC Project',
      year: '2022',
      link: 'https://lh3.google.com/u/0/d/1K787K2auceTU0R4bzv0S3FTnG3RuIJ5S=w707-h911-iv1',
    },
    {
      name: 'Chứng chỉ TOEIC đạt 475',
      body: 'HUST',
      year: '09/2019',
      link: 'https://lh3.google.com/u/0/d/1psQD-Rj4O8P0Vu6LtPWdkEF72A_rVESO=w707-h911-iv1',
    },
  ],
  educations: [
    {
      institution: 'Trường Đại học Bách khoa Hà Nội - HUST',
      degree:
        'Chuyên ngành: Công nghệ thông tin - khóa K60 | GPA: 2.97/4 (7.67/10) - Khá',
      from: '2015',
      to: '2020',
    },
  ],
  // Replaced by About Me
  publications: [
    {
      title: ' ',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        'Gần 6 năm làm việc trong ngành IT là quãng thời gian tôi cảm thấy thật may mắn và biết ơn. Tôi may mắn khi được trao cơ hội, trải qua nhiều dự án lớn nhỏ với nhiều vai trò khác nhau, để hiểu hơn, làm tốt hơn, hiểu được mục tiêu làm hài lòng các bên liên quan dù ở vị trí nào trong dự án. Tôi biết ơn vì tôi đã gặp được những người thầy, đồng nghiệp, đôi khi cả các bạn trẻ đã cho tôi cơ hội và trải nghiệm khi đồng hành cùng mọi người, giúp tôi đạt được những mục tiêu lớn nhỏ đã đề ra và trở thành fullstack developer. Tôi cảm ơn vì môi trường outsource đã cho tôi một nơi để rèn giũa kỹ năng cho bản thân, được làm việc nhiều domain từ truyền thống đến hiện đại, blockchain. Hiện tại, tìm kiếm một môi trường product với những bài toán lớn hơn và chuyên nghiệp hơn là bước tiếp theo trên lộ trình phát triển của tôi.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/haiduong0097/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
