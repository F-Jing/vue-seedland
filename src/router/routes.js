const Index = () => import(/* webpackChunkName: "Index" */ "@/views/Index.vue");
const About = () =>
  import(/* webpackChunkName: "AboutIndex" */ "@/views/About.vue");
const Vision = () =>
  import(/* webpackChunkName: "Vision" */ "@/views/Vision.vue");
const Honor = () => import(/* webpackChunkName: "Honor" */ "@/views/Honor.vue");
const Culture = () =>
  import(/* webpackChunkName: "Culture" */ "@/views/Culture.vue");
const Houses = () =>
  import(/* webpackChunkName: "Houses" */ "@/views/Houses.vue");
const Wisdom = () =>
  import(/* webpackChunkName: "Wisdom" */ "@/views/Wisdom.vue");
const Product = () =>
  import(/* webpackChunkName: "Product" */ "@/views/Product.vue");
const Ecology = () =>
  import(/* webpackChunkName: "Ecology" */ "@/views/Ecology.vue");
const NewOne = () =>
  import(/* webpackChunkName: "NewOne" */ "@/views/NewOne.vue");
const NewOneSome = () =>
  import(/* webpackChunkName: "NewOneSome" */ "@/views/NewOneSome.vue");
const NewTwo = () =>
  import(/* webpackChunkName: "NewTwo" */ "@/views/NewTwo.vue");
const Join = () => import(/* webpackChunkName: "Join" */ "@/views/Join.vue");
const Report = () =>
  import(/* webpackChunkName: "Report" */ "@/views/Report.vue");
const Error404 = () =>
  import(/* webpackChunkName: "Report" */ "@/views/Error404.vue");
export default [
  {
    path: "/",
    component: Index,
    name: "root"
  },
  {
    path: "/about/index",
    name: "about",
    component: { render: h => h("router-view") },
    meta: {
      nav: {
        title: "关于实地"
      }
    },
    children: [
      {
        path: "/about/index",
        name: "aboutSeedLand",
        component: About,
        meta: {
          nav: {
            title: "集团简介"
          }
        }
      },
      {
        path: "/about/vision",
        name: "vision",
        component: Vision,
        meta: {
          nav: {
            title: "实地愿景"
          }
        }
      },
      {
        path: "/about/honor",
        name: "honor",
        component: Honor,
        meta: {
          nav: {
            title: "实地荣誉"
          }
        }
      },
      {
        path: "/about/culture",
        name: "culture",
        component: Culture,
        meta: {
          nav: {
            title: "企业文化"
          }
        }
      }
    ]
  },
  {
    path: "/about/houses",
    name: "houses",
    component: Houses,
    meta: {
      nav: {
        title: "地产服务"
      }
    },
    children: [
      {
        path: "/about/houses",
        name: "housesInfo",
        component: Houses,
        meta: {
          nav: {
            title: "楼盘信息"
          }
        }
      }
    ]
  },
  {
    path: "/wisdom/index",
    name: "wisdom",
    component: { render: h => h("router-view") },
    meta: {
      nav: {
        title: "智慧人居"
      }
    },
    children: [
      {
        path: "/wisdom/index",
        name: "wisdomInfo",
        component: Wisdom,
        meta: {
          nav: {
            title: "全场景智慧社区"
          }
        }
      },
      {
        path: "/wisdom/product",
        name: "product",
        component: Product,
        meta: {
          nav: {
            title: "智能产品"
          }
        }
      },
      {
        path: "/wisdom/ecology",
        name: "ecology",
        component: Ecology,
        meta: {
          nav: {
            title: "智慧人居生态系统"
          }
        }
      }
    ]
  },
  {
    path: "/new1",
    name: "new",
    component: { render: h => h("router-view") },
    meta: {
      nav: {
        title: "新闻中心"
      }
    },
    children: [
      {
        path: "/new1",
        name: "new1",
        component: NewOne,
        meta: {
          nav: {
            title: "企业新闻"
          }
        }
      },
      {
        path: "/new2",
        name: "new2",
        component: NewTwo,
        meta: {
          nav: {
            title: "楼盘动态"
          }
        }
      }
    ]
  },
  {
    path: "/join/index",
    name: "join",
    component: { render: h => h("router-view") },
    meta: {
      nav: {
        title: "加入实地"
      }
    },
    children: [
      {
        path: "/join/index",
        name: "chance",
        component: Join,
        meta: {
          nav: {
            title: "工作机会"
          }
        }
      },
      {
        path: "/join/index",
        name: "team",
        component: Join,
        meta: {
          nav: {
            title: "团队理念"
          }
        }
      },
      {
        path: "/join/index",
        name: "life",
        component: Join,
        meta: {
          nav: {
            title: "实地生活"
          }
        }
      },
      {
        path: "/join/index",
        name: "talent",
        component: Join,
        meta: {
          nav: {
            title: "人才观"
          }
        }
      },
      {
        path: "/join/index",
        name: "strength",
        component: Join,
        meta: {
          nav: {
            title: "团队实力"
          }
        }
      },
      {
        path: "/join/index",
        name: "activity",
        component: Join,
        meta: {
          nav: {
            title: "员工活动"
          }
        }
      }
    ]
  },
  {
    path: "/index",
    name: "contact",
    component: { render: h => h("router-view") },
    meta: {
      nav: {
        title: "联系我们"
      }
    },
    children: [
      {
        path: "/contact/report",
        name: "report",
        component: Report,
        meta: {
          nav: {
            title: "廉洁举报"
          }
        }
      },
      {
        path: "/index",
        name: "service",
        component: Index,
        meta: {
          nav: {
            title: "客服热线：400-0080-808"
          }
        }
      }
    ]
  },
  {
    path: "/new1/:id",
    component: NewOneSome
  },
  {
    path: "/404",
    component: Error404,
    name: "Error404"
  },
  {
    path: "*",
    redirect: { name: "Error404" }
  }
];
