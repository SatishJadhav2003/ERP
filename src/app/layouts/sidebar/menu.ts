import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 0,
        label: 'menu',
        isTitle: true,
    },
    // {
    //     id: 1,
    //     label: 'dashboards',
    //     icon: 'monitor-dot',
    //     subItems: [
    //         {
    //             id: 1.1,
    //             label: 'analytics',
    //             link: '/dashboards-analytics',
    //             parentId: 1
    //         },
    //         {
    //             id: 1.2,
    //             label: 'ecommerce',
    //             link: '/',
    //             parentId: 1
    //         },
    //         {
    //             id: 1.3,
    //             label: 'email',
    //             link: '/dashboards-email',
    //             parentId: 1
    //         },
    //         {
    //             id: 1.4,
    //             label: 'hr',
    //             link: '/dashboards-hr',
    //             parentId: 1
    //         },
    //         {
    //             id: 1.5,
    //             label: 'social',
    //             link: '/dashboards-social',
    //             parentId: 1
    //         },
    //     ]
    // },
    
    {
        id: 2.48,
        label: 'users',
        icon: 'user',
        parentId: 2,
        link: '/users-list',
        subItems: [
            {
                id: 2.49,
                label: 'User List',
                link: '/users-list',
                parentId: 2.48,
            },
        ]
    },

    // {
    //     id: 2.48,
    //     label: 'users',
    //     icon: 'user',
    //     link: '/apps-users-list',
    //     parentId: 0,
    // },
    {
        id: 2.38,
        label: 'masters',
        icon: 'scroll-text',
        link: '/masters',
        parentId: 2,
    },
]