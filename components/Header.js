import React from 'react'
import Link from 'next/link'
import {
    TopBar,
    TopBarSection,
    TopBarTitle,
    Avatar,
    TopBarLink,
    TopBarLinkContainer,
} from '@duik/it'
import '@duik/it/dist/styles.css'
import { FiSearch, FiChevronDown, FiBell } from 'react-icons/fi'

export default function Header() {
    const menuLinks = [
        {
            title: 'Blog',
            to: 'about',
        },
    ]

    return (
        <div>
            <TopBar className="box">
                <TopBarSection>
                    <TopBarTitle>
                        <TopBarLink
                            href="/"
                            className="flex flex-row items-center"
                        >
                            <img
                                style={{ width: '30px', height: '30px' }}
                                alt="Wildcard"
                                src="/logo.png"
                            />
                            <h2 className="mb-4 ml-4">
                                <b>Wildcard</b>
                                <b className="header-secondary">portal</b>
                            </h2>
                        </TopBarLink>
                    </TopBarTitle>
                </TopBarSection>
                <TopBarSection className="menu">
                    <TopBarLinkContainer>
                        <FiSearch />
                        <div className="vl"></div>
                        {menuLinks.map((item) => {
                            return (
                                <Link
                                    key={item.title}
                                    href={`../${item.to}`}
                                    passHref
                                >
                                    <a className="menu-item">{item.title}</a>
                                </Link>
                            )
                        })}
                    </TopBarLinkContainer>
                </TopBarSection>
                <TopBarSection className="push"></TopBarSection>
            </TopBar>
        </div>
    )
}
