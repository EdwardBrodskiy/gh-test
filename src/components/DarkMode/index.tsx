import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      colorScheme='grey'
      color='white'
      aria-label='change color mode'
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      isRound
      _focus={{
        boxShadow: '0 0 10px 1px white'
      }}
    />
  )
}
