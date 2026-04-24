import React, { useState } from 'react';
import { Box, IconButton, VStack, Text, Input, Flex } from '@chakra-ui/react';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: 'bot', text: 'Hello! I am your SkillOrbit AI. Ask me about jobs, colleges, or your 90-day mission!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    // Mock simulation of API response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Analyzing your query across our datasets... (Mock Response)' }]);
    }, 1000);
    setInput('');
  };

  return (
    <Box position="fixed" bottom={{ base: 4, md: 8 }} right={{ base: 4, md: 8 }} zIndex="2000">
      {isOpen && (
        <Box 
          mb={4} 
          width={{ base: "300px", md: "350px" }} 
          height="450px" 
          bg="rgba(20, 22, 30, 0.85)" 
          backdropFilter="blur(20px)" 
          borderRadius="2xl" 
          border="1px solid rgba(168, 85, 247, 0.3)"
          boxShadow="0 20px 40px rgba(0,0,0,0.5)"
          display="flex"
          flexDirection="column"
          overflow="hidden"
          transition="all 0.3s ease"
        >
          {/* Header */}
          <Flex bg="rgba(168, 85, 247, 0.15)" p={4} justifyContent="space-between" alignItems="center" borderBottom="1px solid rgba(255,255,255,0.05)">
            <Text fontFamily="'Space Grotesk', sans-serif" fontWeight="bold" color="purple.300">SkillOrbit AI</Text>
            <IconButton aria-label="Close" size="xs" variant="ghost" colorScheme="purple" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </IconButton>
          </Flex>

          {/* Messages */}
          <VStack flex={1} overflowY="auto" p={4} gap={4} alignItems="stretch">
            {messages.map((msg, i) => (
              <Box key={i} alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'} bg={msg.sender === 'user' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.05)'} p={3} borderRadius="lg" maxW="80%">
                <Text fontSize="sm" color={msg.sender === 'user' ? 'indigo.100' : 'whiteAlpha.900'}>{msg.text}</Text>
              </Box>
            ))}
          </VStack>

          {/* Input */}
          <Flex p={3} borderTop="1px solid rgba(255,255,255,0.05)">
            <Input 
              size="sm" 
              variant="subtle" 
              bg="rgba(0,0,0,0.3)" 
              _hover={{ bg: 'rgba(0,0,0,0.5)' }} 
              _focus={{ bg: 'rgba(0,0,0,0.5)', borderColor: 'purple.400' }}
              placeholder="Ask anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              border="none"
              color="white"
            />
            <IconButton aria-label="Send" size="sm" ml={2} colorScheme="purple" onClick={handleSend}>
              <Send size={16} />
            </IconButton>
          </Flex>
        </Box>
      )}

      {!isOpen && (
        <IconButton
          aria-label="Open Chat"
          size="lg"
          borderTopRightRadius="full"
          borderTopLeftRadius="full"
          borderBottomRightRadius="full"
          borderBottomLeftRadius="full"
          colorScheme="purple"
          boxShadow="0 0 20px rgba(168, 85, 247, 0.6)"
          onClick={() => setIsOpen(true)}
          _hover={{ transform: 'scale(1.1)' }}
          transition="all 0.2s"
        >
          <MessageCircle size={24} />
        </IconButton>
      )}
    </Box>
  );
};
