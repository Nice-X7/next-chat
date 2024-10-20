type ContactProps = {
    id: number
    firstname: string
    lastname: string
    link: string
}

export const contacts: ContactProps[] = [
    {
        id: 1,
        firstname: 'Ислам',
        lastname: 'Касумов',
        link: '/kasumov',
    },
    {
        id: 2,
        firstname: 'Асвад',
        lastname: 'Ясаев',
        link: '/yasaev',
    },
    {
        id: 3,
        firstname: 'Мухаммад',
        lastname: 'Хасанов',
        link: '/hasanov',
    },
    {
        id: 4,
        firstname: 'Мухаммад',
        lastname: 'Мираев',
        link: '/miraev',
    },
];
