interface GetStory {
    parent: string;
    title: string;
}
export declare function getStory({ parent, title }: GetStory): Promise<{
    title: string;
    parent: string;
    icon: string;
} | null | undefined>;
export declare function load({ params }: {
    params: any;
}): {
    props: {
        params: any;
    };
};
export {};
