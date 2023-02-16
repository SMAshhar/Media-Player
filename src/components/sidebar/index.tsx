'use client'

import { List, ListItem, VStack } from "@chakra-ui/react"
import { NavItem } from "./nav-item"
import { navItems } from './nav-data'
import { Logo } from "components/logo"

export const Sidebar = () => {
    return (
        <VStack
            alignItems='flex-start'
            width='full'
            height={'full'}
            maxW={{ base: 56, '2xl': 72 }}
            borderRightColor='gray.dark'
            borderRightWidth={2}
            flexShrink={0}

        >
            <Logo />
            <List
                width='full'
                overflow='auto'
            >
                {navItems.map((item, index) => (
                    <ListItem key={item.label}>
                        <NavItem item={item} isActive={index == 0} />
                    </ListItem>
                ))}

            </List>
        </VStack>
    )
}