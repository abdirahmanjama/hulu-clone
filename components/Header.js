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


const labels = {
    "Home" : HomeIcon,
    "Trending": LightningBoltIcon,
    "Verified": BadgeCheckIcon,
    "Collections": CollectionIcon, 
    "Search": SearchIcon,
    "Account": UserIcon
}
//object entries ...
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
           
            <div className="flex flex-grow justify-evenly max-w-2xl">
                {Object.entries(labels).map((entry) => <HeaderItem label={entry[0]} Icon={entry[1]}/>)}
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100}/>

            {/* Lazy loading, 
            
            
            user doesnt need to see all images.
            
            
            */}
        </header>
    )
}

export default Header
