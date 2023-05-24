export interface User {
    email: string
    id: string
    accessToken: string
}
export const UserInitialState = {
    email: "",
    id: "",
    accessToken: ""
}