import { UserRole } from "@prisma/client";

import { SidebarNavItem } from "types";

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "MENU",
    items: [
      {
        href: "/admin",
        icon: "laptop",
        title: "Admin Panel",
        authorizeOnly: UserRole.ADMIN,
      },
      {
        href: "/dashboard",
        icon: "dashboard",
        title: "Simulados",
      },
      {
        href: "/dashboard/assessments",
        icon: "post",
        title: "Criar Simulado",
        authorizeOnly: UserRole.USER,
        disabled: false,
      },
      {
        href: "/dashboard/charts",
        icon: "lineChart",
        title: "Charts",
      },
      {
        href: "/dashboard/billing",
        icon: "billing",
        title: "Billing",
        authorizeOnly: UserRole.USER,
      },
      {
        href: "/admin/orders",
        icon: "package",
        title: "Orders",
        badge: 2,
        authorizeOnly: UserRole.ADMIN,
      },
    ],
  },
  {
    title: "OPTIONS",
    items: [
      {
        href: "/dashboard/settings",
        icon: "settings",
        title: "Configurações",
      },
      {
        href: "/",
        icon: "home",
        title: "Homepage",
      },
      {
        href: "/docs",
        icon: "bookOpen",
        title: "Documentation",
      },
      {
        href: "#",
        icon: "messages",
        title: "Support",
        authorizeOnly: UserRole.USER,
        disabled: true,
      },
    ],
  },
];
