import React from 'react';
import { Box, Flex, Button, Text, HStack } from '@chakra-ui/react';

export const GlobalNavbar = ({ role = 'student' }: { role?: string }) => {
  const navItems = {
    student: ['Home', 'Jobs', 'Events', 'GPS', 'Dashboard'],
    teacher: ['Home', 'Create Event', 'Students', 'Dashboard'],
    recruiter: ['Home', 'Talent', 'Jobs', 'Dashboard'],
    admin: ['Analytics', 'Users', 'Reports']
  };

  const items = navItems[role as keyof typeof navItems] || navItems.student;

  return (
    <Box
      position="sticky"
      top="0"
      w="100%"
      zIndex="1000"
      bg="rgba(13, 15, 20, 0.6)"
      backdropFilter="blur(16px)"
      borderBottom="1px solid rgba(255,255,255,0.05)"
      px={{ base: 4, md: 8 }}
      py={4}
    >
      <Flex justifyContent="space-between" alignItems="center" maxW="1400px" mx="auto">
        <Text
          fontFamily="'Space Grotesk', sans-serif"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, #a855f7, #6366f1)"
          bgClip="text"
        >
          SkillOrbit OS
        </Text>

        <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
          {items.map((item, id) => (
            <Text key={id} color="whiteAlpha.800" _hover={{ color: 'white', cursor: 'pointer', transform: 'scale(1.05)' }} transition="all 0.2s">
              {item}
            </Text>
          ))}
        </HStack>

        <Button
          bg="rgba(99, 102, 241, 0.15)"
          color="#a855f7"
          border="1px solid rgba(99, 102, 241, 0.4)"
          _hover={{ bg: "rgba(99, 102, 241, 0.3)", transform: "translateY(-1px)" }}
          size="sm"
          fontFamily="'Inter', sans-serif"
        >
          Profile
        </Button>
      </Flex>
    </Box>
  );
};
