import { JSX } from "react"

export type Post = {
    slug: string
    title: string
    date: Date
    thumbnail?: string
    content: JSX.Element
    author: {
        name: string
        about?: string
        role: string
        photo: string
        socialMedias?: Array<
            {
                url: string
                icon?: JSX.Element
            }
        >
    }

}
