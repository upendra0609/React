import { Fragment } from "react"
import Link  from 'next/link'

const News = () => {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/as">Nextjs is a Great</Link>
                </li>
                <li>Something Else</li>
            </ul>
        </Fragment>
    )
}

export default News