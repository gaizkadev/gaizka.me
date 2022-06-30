import Logo from './Icons/Logo'

export default function Navbar() {
    return (
        <>
            <div className="pt-12">
                <div className="w-full container mx-auto p-6">
                    <p className="flex items-center font-mont font-normal lg:text-lg sm:text-sm text-intro">
                        <Logo
                        width={30}
                        height={26}
                        fill={'#EEA1BE'}
                        alt=''
                        />
                        &nbsp;&nbsp;
                        gaizka
                        &nbsp;&nbsp;
                        |
                        &nbsp;&nbsp;
                        Available for freelance Work
                    </p>
                </div>
            </div>
        </>
    )
}