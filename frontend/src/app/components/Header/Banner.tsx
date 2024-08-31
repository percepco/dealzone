import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {

    return (
        <React.Fragment>
            <Link href={"/buybids"}>
                <Image width={1336} height={728} className=' object-cover object-center' src={"/jumbotron.png"} alt={"banner"} />
            </Link>
        </React.Fragment>
    )
}

export default Banner