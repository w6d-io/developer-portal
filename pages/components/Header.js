import React from 'react';
import Link from 'next/link'
import { TopBar, TopBarSection, TopBarTitle, Avatar, TopBarLink, TopBarLinkContainer } from '@duik/it'
import '@duik/it/dist/styles.css'
import { FiSearch, FiChevronDown, FiBell } from "react-icons/fi"

export default function Header() {
    const menuLinks = [
        {
            title: "Blog",
            to: "",
        }
    ]
    
    return (
        <div>
            <TopBar className="box">
                <TopBarSection>
                    <TopBarTitle>
                        <TopBarLink href="/"><Avatar imgUrl="https://media-exp0.licdn.com/dms/image/C4D0BAQHca9scvFTn_g/company-logo_200_200/0/1575039115252?e=2159024400&v=beta&t=lhQfV9RKT_iydx97uugwZtvsL_zgPoTU_fxFC11nkaI" name={<h2><b>Wildcard</b><b className="header-secondary">portal</b></h2>} pill={<span>O</span>} /></TopBarLink>
                    </TopBarTitle>
                </TopBarSection>
                <TopBarSection className="menu">
                    <TopBarLinkContainer>
                        <FiSearch />
                        <div className="vl"></div>
                        {menuLinks.map(item => {
                            return <Link key={item.title} href={`../${item.to}`} passHref><a className="menu-item">{item.title}</a></Link>
                        })}
                    </TopBarLinkContainer>
                </TopBarSection>
                <TopBarSection className="push">
                </TopBarSection>
            </TopBar>
        </div>
    )
}
