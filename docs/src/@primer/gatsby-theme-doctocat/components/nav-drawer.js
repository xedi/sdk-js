import {
    BorderBox,
    Box,
    Flex,
    Link,
    StyledOcticon,
  } from '@primer/components'
  import {X} from '@primer/octicons-react'
  import {Link as GatsbyLink} from 'gatsby'
  import React from 'react'
  import navItems from '../nav.yml'
  import DarkButton from '@primer/gatsby-theme-doctocat/src/components/dark-button'
  import Drawer from '@primer/gatsby-theme-doctocat/src/components/drawer'
  import NavItems from '@primer/gatsby-theme-doctocat/src/components/nav-items'
  import useSiteMetadata from '@primer/gatsby-theme-doctocat/src/use-site-metadata'

  function NavDrawer({isOpen, onDismiss}) {
    const {shortName} = useSiteMetadata()

    return (
      <Drawer isOpen={isOpen} onDismiss={onDismiss}>
        <Box
          maxHeight="100vh"
          bg="gray.9"
          style={{overflow: 'auto', WebkitOverflowScrolling: 'touch'}}
        >
          <Flex flexDirection="column" color="blue.2" bg="gray.9">
            <BorderBox
              border={0}
              borderRadius={0}
              borderBottom={1}
              borderColor="gray.7"
            >
              <Flex
                py={3}
                px={4}
                alignItems="center"
                justifyContent="space-between"
              >
                <Link
                  href="https://dev.xedi.com"
                  fontFamily="mono"
                  color="inherit"
                >
                  Development
                </Link>
                <DarkButton aria-label="Close" onClick={onDismiss}>
                  <StyledOcticon icon={X} />
                </DarkButton>
              </Flex>
            </BorderBox>
          </Flex>
          <Flex flexDirection="column" py={4} color="gray.7" bg="gray.0">
            <Link
              as={GatsbyLink}
              to="/"
              display="inline-block"
              color="inherit"
              fontFamily="mono"
              mx={4}
              mb={4}
            >
              {shortName}
            </Link>
            <NavItems items={navItems} />
          </Flex>
        </Box>
      </Drawer>
    )
  }

  export default NavDrawer
