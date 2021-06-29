import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      pos="absolute"
      top="1rem"
      right="1rem"
      size="lg"
      variant="ghost"
      isRound={true}
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      aria-label={
        colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light mode'
      }
    />
  );
}
