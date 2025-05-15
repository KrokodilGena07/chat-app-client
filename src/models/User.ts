export interface User {
    id: string;
    email: string;
    name: string;
    surname: string | null;
    isActivated: boolean;
    image: string | null;
}