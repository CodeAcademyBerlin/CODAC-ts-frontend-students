
export interface JwtPayloadWithID extends JwtPayload {
    id: number
}

export interface Contributor {
    login: string
    avatar_url: string
    contributions: string
    html_url: string
}