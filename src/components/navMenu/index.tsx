import React from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  useDisclosure,
  Image,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react'
import logo from '../../logo_whole.svg'
import { HamburgerIcon } from '@chakra-ui/icons'

export const NavMenu = () => {
  // const { colorMode } = useColorMode()
  // const bgColor = { light: 'gray.700', dark: 'gray.700' }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <IconButton
        aria-label='menu'
        colorScheme='grey'
        color='white'
        isRound
        icon={<HamburgerIcon boxSize={6} />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='brand.dark' opacity='90%'>
          <DrawerHeader>
            <Image src={logo} color='white' width='100%' mb={6} />
          </DrawerHeader>

          <DrawerBody>
            <Text size='lg'>hello?</Text>
            <UnorderedList>
              <ListItem >test</ListItem>
            </UnorderedList>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
