import {Avatar, Box, Flex, Link, Sticky, StyledOcticon } from '@primer/components'
import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import {ChevronRight, ThreeBars} from '@primer/octicons-react'
import Search from '@primer/gatsby-theme-doctocat/src/components/search'
import DarkButton from '@primer/gatsby-theme-doctocat/src/components/dark-button'
import NavDrawer from './nav-drawer'

export const HEADER_HEIGHT = 66

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Sticky>
            <Flex
                px={4}
                py={3}
                alignItems="center"
                justifyContent="space-between"
                bg="gray.9"
            >
                <Flex alignItems="center">
                    <Link href="https://xedi.com" color="blue.4" mr={3}>
                        <Avatar size="40" src="https://avatars.githubusercontent.com/xedi" />
                    </Link>
                    <Flex display={['none', null, 'flex']} alignItems="center">
                        <Link href="https://dev.xedi.com" color="blue.4" fontFamily="mono">
                            Development
                        </Link>
                        <StyledOcticon icon={ChevronRight} mx={2} color="blue.4" />
                        <Link as={GatsbyLink} to="/" color="blue.4" fontFamily="mono" mr={4}>
                            JavaScript
                        </Link>
                        <Box display={['none', null, null, 'block']}>
                            <Search />
                        </Box>
                    </Flex>
                </Flex>
                <Flex>
                    <Box display={['none', null, null, 'block']}>

                    </Box>
                    <Flex display={['flex', null, null, 'none']}>
                        <DarkButton
                            aria-label="Menu"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(true)}
                        >
                        <StyledOcticon icon={ThreeBars} />
                        </DarkButton>
                        <NavDrawer isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
                    </Flex>
                </Flex>
            </Flex>
        </Sticky>
    )
}
