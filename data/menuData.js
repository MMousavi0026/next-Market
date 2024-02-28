const menuData = [
    {
        id: 1,
        title: "صفحه اصلی",
        href: "/"
    },
    {
        id: 2,
        title: "ورود / ثبت نام",
        href: "/login"
    },
    {
        id: 3,
        title: "همه محصولات",
        href: "/shop"
    },
    {
        id: 4,
        title: "تخفیفات ویژه",
        type: "button",
        elementVertical: 'bottom',
        elementHorizontal: 'right',
        childrenVertical: 'top',
        childrenHorizontal: 'right',
        children: [
            {
                id: 11,
                imgSrc: "/img/s1.png",
                title: "ماهی و آبزیان",
                href: "shop",
            },
            {
                id: 12,
                imgSrc: "/img/s2.png",
                title: "میوه و سبزیجات",
                href: "shop",
            },
            {
                id: 13,
                imgSrc: "/img/s3.png",
                title: "نان و غلات",
                href: "shop",
            },
            {
                id: 14,
                imgSrc: "/img/s4.png",
                title: "لبنیات و پروتئین",
                href: "shop",
            },
            {
                id: 15,
                imgSrc: "/img/s5.png",
                title: "شوینده و نظافتی",
                href: "shop",
            },
            {
                id: 16,
                imgSrc: "/img/s6.png",
                title: "گوشت و استیک",
                href: "/shop",
            },
        ]
    },
    {
        id: 5,
        title: "دسترسی سریع",
        type: "list",
        elementVertical: 'bottom',
        elementHorizontal: 'right',
        childrenVertical: 'top',
        childrenHorizontal: 'right',
        children: [
            {
                id: 17,
                title: "دسته بندی",
                type: "list",
                elementVertical: 'center',
                elementHorizontal: 'left',
                childrenVertical: 'top',
                childrenHorizontal: 'right',
                children: [
                    {
                        id: 20,
                        title: "سوپر مارکت",
                        href: "/shop"
                    },
                    {
                        id: 21,
                        title: "مرغ و ماهی",
                        href: "/shop"
                    },
                    {
                        id: 22,
                        title: "سبزیجات",
                        href: "/shop"
                    },
                    {
                        id: 23,
                        title: "لبنیات",
                        href: "/shop"
                    },
                    {
                        id: 24,
                        title: "نظافت و شستشو",
                        href: "/shop"
                    },
                    {
                        id: 25,
                        title: "پرفروش ترین ها",
                        href: "/shop"
                    },
                ]
            },
            {
                id: 18,
                title: "برچسب ها",
                type: "list",
                elementVertical: 'center',
                elementHorizontal: 'left',
                childrenVertical: 'top',
                childrenHorizontal: 'right',
                children: [
                    {
                        id: 26,
                        title: "سس",
                        href: "/shop"
                    },
                    {
                        id: 27,
                        title: "سبزیجات",
                        href: "/shop"
                    },
                    {
                        id: 28,
                        title: "گوشت استیک",
                        href: "/shop"
                    },
                    {
                        id: 29,
                        title: "برگر",
                        href: "/shop"
                    },
                    {
                        id: 30,
                        title: "اسپری",
                        href: "/shop"
                    },
                ]
            },
            {
                id: 19,
                title: "دسترسی سریع",
                type: "list",
                elementVertical: 'center',
                elementHorizontal: 'left',
                childrenVertical: 'top',
                childrenHorizontal: 'right',
                children: [
                    {
                        id: 31,
                        title: "سس",
                        href: "/shop"
                    },
                    {
                        id: 32,
                        title: "سبزیجات",
                        href: "/shop"
                    },
                    {
                        id: 33,
                        title: "گوشت استیک",
                        href: "/shop"
                    },
                    {
                        id: 34,
                        title: "برگر",
                        href: "/shop"
                    },
                    {
                        id: 35,
                        title: "اسپری",
                        href: "/shop"
                    },
                ]
            },
        ]
    },
    {
        id: 6,
        title: "اخبار",
        href: "/news"
    },
    {
        id: 7,
        title: "تماس با ما",
        href: "/contact-us"
    },
]

export default menuData;