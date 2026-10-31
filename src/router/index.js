import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BlinkReminderView from "../views/BlinkReminderView.vue";
import EventsGalleryView from "../views/EventsGalleryView.vue";

const SITE_URL = "https://kufreabasibassey.com";
const DEFAULT_TITLE = "Kufre-Abasi Bassey | Senior Frontend & Mobile Engineer | React Native, TypeScript, Vue";
const DEFAULT_DESCRIPTION =
  "Senior Frontend & React Native Engineer with 5+ years building production-grade fintech, SaaS, mobility, and Web3 applications. 16+ production apps delivered across global and African teams.";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        canonical: `${SITE_URL}/`,
      },
    },
    {
      path: "/events",
      name: "Events",
      component: EventsGalleryView,
      alias: ["/speaking", "/gallery", "/talks"],
      meta: {
        title: "Technical Speaking, Workshops & Keynote Archives | Kufre-Abasi Bassey",
        description:
          "Public speaking archives, developer workshops, and hackathons by Kufre-Abasi Bassey, including ICP.Hub, BitDevs, GDSC, Superteam Nigeria, and Tech Ignite.",
        canonical: `${SITE_URL}/events`,
      },
    },
    {
      path: "/blink-reminder",
      name: "BlinkReminder",
      component: BlinkReminderView,
      alias: ["/download/blink-reminder", "/blink"],
      meta: {
        title: "Blink Reminder — Minimalist Eye Health Desktop App | Kufre-Abasi Bassey",
        description:
          "Download Blink Reminder for macOS and Windows. A lightweight, privacy-first desktop utility that prevents digital eye strain using the 20-20-20 rule.",
        canonical: `${SITE_URL}/blink-reminder`,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

// Dynamic Head / SEO Update Hook
router.afterEach((to) => {
  const title = to.meta?.title || DEFAULT_TITLE;
  const description = to.meta?.description || DEFAULT_DESCRIPTION;
  const canonicalUrl = to.meta?.canonical || `${SITE_URL}${to.path}`;

  // Update Page Title
  document.title = title;

  // Helper to set or update meta tag
  const setMeta = (attrName, attrValue, content) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // Update standard meta description
  setMeta("name", "description", description);

  // Update OpenGraph
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", canonicalUrl);

  // Update Twitter Cards
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:url", canonicalUrl);

  // Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", canonicalUrl);
});

export default router;
