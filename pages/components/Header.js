import React from 'react';
import Link from 'next/link'
import { TopBar, TopBarSection, TopBarTitle, Avatar, TopBarLink, TopBarLinkContainer } from '@duik/it'
import '@duik/it/dist/styles.css'
import { FiSearch, FiChevronDown, FiBell } from "react-icons/fi"

export default function Header() {
    const menuLinks = [
        {
            title: "Documentation",
            to: "documentation"
        },
        {
            title: "Tutorials",
            to: "tutorials"
        },
        {
            title: "Blog",
            to: "blog",
        },
        {
            title: "Events",
            to: "events"
        },
    ]
    
    return (
        <div>
            <TopBar className="box">
                <TopBarSection>
                    <TopBarTitle>
                        <TopBarLink href="/developer-portal/"><Avatar imgUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQHca9scvFTn_g/company-logo_200_200/0/1575039115252?e=2159024400&v=beta&t=lhQfV9RKT_iydx97uugwZtvsL_zgPoTU_fxFC11nkaI" name={<h2><b>Wildcard</b><b className="header-secondary">portal</b></h2>} pill={<span>O</span>} /></TopBarLink>
                    </TopBarTitle>
                </TopBarSection>
                <TopBarSection className="menu">
                    <TopBarLinkContainer>
                        <FiSearch />
                        <div className="vl"></div>
                        {menuLinks.map(item => {
                            return <Link key={item.title} href={`../developer-portal/${item.title}`} passHref><a className="menu-item">{item.title}</a></Link>
                        })}
                    </TopBarLinkContainer>
                </TopBarSection>
                <TopBarSection className="push">
                    <TopBarLinkContainer>
                        <p>My dashboard</p>
                        <TopBarLink href="#" className="icon">
                            <FiBell size={25} />
                        </TopBarLink>
                        <TopBarLink>
                            <Avatar imgUrl="https://futhead.cursecdn.com/static/img/14/players/156443.png" />
                        </TopBarLink>
                        <FiChevronDown />
                    </TopBarLinkContainer>
                </TopBarSection>
            </TopBar>
        </div>
    )
}
