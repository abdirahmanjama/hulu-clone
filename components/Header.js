import Image from 'next/image'
import React from 'react'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"
import HeaderItem from './HeaderItem'
function Header() {
    return (
        <header className="">
            <h1>This is the header</h1>
            <div>
                <HeaderItem label="Home" Icon={HomeIcon}/>
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100}/>

            {/* Lazy loading, 
            
            
            user doesnt need to see all images.
            
            
            */}
        </header>
    )
}

export default Header
