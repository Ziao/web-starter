interface CatFactResponse {
    text: string;
    status: {
        verified: boolean | null;
        sentCount: number;
    };
    type: string;
    user: string;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
}
