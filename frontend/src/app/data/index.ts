import { link } from "fs"

export const categories = [
    {
        id: 1,
        name: "New Items",
        tag: "new"
    },
    {
        id: 2,
        name: "Bid Packs",
        tag: "bid-packs"
    },
    {
        id: 3,
        name: "Electronics",
        tag: "electronics"
    }

]


export const navigationTab = [
    {
        id: 1,
        name: "Help",
        link: "/help"
    },
    {
        id: 2,
        name: "Tips & Tricks",
        link: "/help/tips-tricks"
    },
    {
        id: 3,
        name: "Winners",
        link: "/winners"
    },
    {
        id: 4,
        name: "Get Started",
        link: "#",
    },
]


export const auctions = [
    {
        id: 1,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 2,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 3,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 4,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 5,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 6,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },

    {
        id: 1,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 2,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 3,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 4,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 5,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },
    {
        id: 6,
        name: "2024 Harley Davidson Hydra-Glide Revival - Redline Red",
        starting_price: 100,
        final_price: 150,
        original_price: 27150,
        restrictions: {
            new_bidders: true,
            one_per_bid: true,
            stop_new_bidders: 1000,
        },
        timer: "10",
        auto_bids: 50000,
        last_bidder: "ali",
        bids: 0,
        featured_img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg",
        gallery: [
            {
                id: 1,
                img: "https://img.dealdash.com/44703_02f67f40a8_nj.png?ch=Width%2CDPR&fit=max&fm=jpg"
            },
            {
                id: 2,
                img: "https://img.dealdash.com/44703_983f1465f8_2024-08-07_12-22-43.png"
            },
            {
                id: 3,
                img: "https://img.dealdash.com/44703_443c5f4028_2024-08-07_12-22-23.png"
            },
            {
                id: 4,
                img: "https://img.dealdash.com/44703_e1c9e112ac_2024-08-07_12-22-05.png"
            },
            {
                id: 5,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
            {
                id: 6,
                img: "https://img.dealdash.com/44703_8d31489973_2024-08-07_12-23-02.png"
            },
        ]
    },

]

export const FooterNavigation = [
    {
        id: 1,
        title: "Site Links",
        navigation: [
            {
                id: 1,
                name: "Auctions",
                link: "/"
            },
            {
                id: 2,
                name: "DealDash Reviews",
                link: "/winners"
            },
            {
                id: 3,
                name: "DealDash Legit",
                link: "/whats-the-catch"
            },
            {
                id: 4,
                name: "Press",
                link: "/press"
            },
            {
                id: 5,
                name: "Login",
                link: "/login"
            },
            {
                id: 6,
                name: "Create the account",
                link: "/join"
            },
        ]
    },
    {
        id: 1,
        title: "Site Links",
        navigation: [
            {
                id: 1,
                name: "Auctions",
                link: "/"
            },
            {
                id: 2,
                name: "DealDash Reviews",
                link: "/winners"
            },
            {
                id: 3,
                name: "DealDash Legit",
                link: "/whats-the-catch"
            },
            {
                id: 4,
                name: "Press",
                link: "/press"
            },
            {
                id: 5,
                name: "Login",
                link: "/login"
            },
            {
                id: 6,
                name: "Create the account",
                link: "/join"
            },
        ]
    },
    {
        id: 1,
        title: "Site Links",
        navigation: [
            {
                id: 1,
                name: "Auctions",
                link: "/"
            },
            {
                id: 2,
                name: "DealDash Reviews",
                link: "/winners"
            },
            {
                id: 3,
                name: "DealDash Legit",
                link: "/whats-the-catch"
            },
            {
                id: 4,
                name: "Press",
                link: "/press"
            },
            {
                id: 5,
                name: "Login",
                link: "/login"
            },
            {
                id: 6,
                name: "Create the account",
                link: "/join"
            },
        ]
    },
    {
        id: 1,
        title: "Site Links",
        navigation: [
            {
                id: 1,
                name: "Auctions",
                link: "/"
            },
            {
                id: 2,
                name: "DealDash Reviews",
                link: "/winners"
            },
            {
                id: 3,
                name: "DealDash Legit",
                link: "/whats-the-catch"
            },
            {
                id: 4,
                name: "Press",
                link: "/press"
            },
            {
                id: 5,
                name: "Login",
                link: "/login"
            },
            {
                id: 6,
                name: "Create the account",
                link: "/join"
            },
        ]
    },
]

export const helpsidebar =
    [
        {
            id: 1,
            name: "Help",
            navigationTab: [
                {
                    id: 1,
                    name: "Help - How it works",
                    link: "/help"
                },
                {
                    id: 2,
                    name: "Frequently Asked Questions",
                    link: "/help/faq"
                },
                {
                    id: 3,
                    name: "How to bid in an auction",
                    link: "/help/how-to-bid"
                },
                {
                    id: 4,
                    name: "Tips & Tricks",
                    link: "/help/tips-tricks"
                },
                {
                    id: 5,
                    name: "What is Bid Pack",
                    link: "/help/bid-pack"
                },
                {
                    id: 6,
                    name: 'How to "Time as Highest Bidder" ?',
                    link: "/help/time-as-highest-bidder"
                },
                {
                    id: 7,
                    name: "Promotions",
                    link: "/help/promotions"
                },
                {
                    id: 8,
                    name: "Ordering & Shipping",
                    link: "/help/ordering-shipping"
                },
                {
                    id: 9,
                    name: "Returns & Refunds",
                    link: "/help/returns-refunds"
                },
                {
                    id: 10,
                    name: "Payments",
                    link: "/help/payments"
                },
                {
                    id: 10,
                    name: "Royalty Program",
                    link: "/help/royalty-program"
                },
                {
                    id: 11,
                    name: "Contact Us",
                    link: "/help/contact-us"
                }
            ]
        },
        {
            id: 2,
            name: "About",
            navigationTab:
                [
                    {
                        id: 1,
                        name: "About Us",
                        link: "/about"
                    },
                    {
                        id: 2,
                        name: "House Rules",
                        link: "/house-rules"
                    },
                    {
                        id: 3,
                        name: "Careers",
                        link: "/careers"
                    },
                    {
                        id: 4,
                        name: "Media & Press Releases",
                        link: "/media-press-releases"
                    },
                    {
                        id: 5,
                        name: "Privacy Policy",
                        link: "/privacy-policy"
                    },
                    {
                        id: 6,
                        name: "Terms of Use",
                        link: "/terms-of-use"
                    },
                    {
                        id: 7,
                        name: "Accessibility",
                        link: "/accessibility"
                    },
                    {
                        id: 8,
                        name: "Blog",
                        link: "/blog"
                    },
                    {
                        id: 9,
                        name: "Get the App",
                        link: "/app"
                    }
                ]
        }
    ]

export const HelpContent = [
    {
        id: 1,
        content: {
            id: 1,
            text: "How it works"
        },
        position: 1,
    },
    {
        id: 2,
        content: {
            id: 2,
            list: [
                "Each bid raises the price by $0.01.",
                "The auction clock restarts from 9 seconds every time someone bids.",
                "If no new bids are placed before the clock runs out, the last bidder wins.",
                "Before you can take part in an auction you need to buy bids.Bids are currently on sale for 13¢ each! This small fee makes the massive 95% off savings possible!"
            ]
        },
        position: 2,
    },
    {
        id: 3,
        content: {
            id: 1,


            text: "Watch the video",
            video: {
                id: 1,
                videoUrl: "https://player.vimeo.com/video/557480099?title=0&amp;byline=0&amp;autoplay=0&quot"
            },
        },
        position: 3
    },
    {
        id: 4,
        content: {
            id: 1,
            button: {
                id: 1,
                text: "Join Now",
                link: "/join",
                styles:
                    "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400   font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl sm:p-4 transition-all duration-300 ease-in-out p-2  rounded-md border border-black"
        },
    },
    position: 4,
    }
]

