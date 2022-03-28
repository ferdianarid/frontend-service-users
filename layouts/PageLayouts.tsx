import Navbar from 'components/Navbar'
import React from 'react'

const PageLayouts = ({ children, username }: any) => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1280px] mx-auto px-2 md:px-20">
                <Navbar username={`Hi, ${username}`} />
                {children}
            </div>
        </React.Fragment>
    )
}

export default PageLayouts