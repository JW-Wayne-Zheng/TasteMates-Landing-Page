import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoPhonePortrait } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import type { IconType } from "react-icons";

type ProjectCardProps = {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
};

function ProjectCard({
  icon,
  title,
  subtitle,
  description,
  gradient,
}: ProjectCardProps) {
  return (
    <Box
      bgGradient={gradient}
      rounded="3xl"
      p={8}
      shadow="md"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-8px)", shadow: "lg" }}
      position="relative"
      overflow="hidden"
    >
      <Box position="relative" zIndex={1}>
        <Icon as={icon} boxSize={12} color="white" mb={4} />
        <Heading size="lg" color="white" mb={1}>
          {title}
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.800" mb={3} fontWeight="600">
          {subtitle}
        </Text>
        <Text color="whiteAlpha.900" fontSize="md">
          {description}
        </Text>
      </Box>
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        width="200px"
        height="200px"
        bg="whiteAlpha.200"
        rounded="full"
        filter="blur(40px)"
      />
    </Box>
  );
}

function App() {
  const [showWebsite, setShowWebsite] = useState(false);

  return (
    <Box minH="100vh" bg="white" position="relative" overflow="hidden">
      {/* Animated background gradients */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        bgGradient="linear-gradient(to bottom right, #FFF8E7, #FFF4D6, #FFFAED)"
        opacity={0.8}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="10%"
        left="5%"
        width="400px"
        height="400px"
        bgGradient="radial-gradient(circle, #E2852E, transparent)"
        opacity={0.12}
        rounded="full"
        filter="blur(60px)"
        animation="float 20s ease-in-out infinite"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="40%"
        right="10%"
        width="500px"
        height="500px"
        bgGradient="radial-gradient(circle, #ABE0F0, transparent)"
        opacity={0.18}
        rounded="full"
        filter="blur(80px)"
        animation="float 25s ease-in-out infinite reverse"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="20%"
        width="450px"
        height="450px"
        bgGradient="radial-gradient(circle, #F5C857, transparent)"
        opacity={0.15}
        rounded="full"
        filter="blur(70px)"
        animation="float 22s ease-in-out infinite"
        pointerEvents="none"
      />

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          @keyframes pulse {
            0%, 100% { transform: rotate(3deg) scale(1); }
            50% { transform: rotate(3deg) scale(1.05); }
          }
        `}
      </style>

      {/* Content */}
      <Box position="relative" zIndex={1}>
        {/* Hero Section */}
        <Container
          maxW="6xl"
          pt={{ base: 12, md: 20 }}
          pb={{ base: 16, md: 24 }}
        >
          <VStack gap={8} align="center" textAlign="center">
            {/* Logo */}
            <Box
              animation="bounce 3s ease-in-out infinite"
              w={{ base: "70%", md: "50%", lg: "40%" }}
              maxW="600px"
            >
              <Image
                src="/TasteMatesLabsLogo.png"
                alt="TasteMates Labs"
                w="100%"
                h="auto"
                objectFit="contain"
                filter="drop-shadow(0 10px 30px rgba(0,0,0,0.15))"
              />
            </Box>

            {/* Main Headline */}
            <VStack gap={4} maxW="4xl">
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="900"
                bgGradient="linear-gradient(to right, #E2852E, #F5C857, #ABE0F0)"
                bgClip="text"
                lineHeight="1.1"
                letterSpacing="-0.03em"
              >
                Joyful Experiences
                <br />
                Through Technology
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="gray.700"
                fontWeight="500"
                maxW="3xl"
                lineHeight="1.6"
              >
                We ship software people actually want to open twice.
              </Text>
            </VStack>
          </VStack>
        </Container>

        {/* Projects Section */}
        <Container maxW="6xl" py={{ base: 12, md: 16 }}>
          <VStack gap={12}>
            <VStack gap={3} textAlign="center">
              <Heading
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="800"
                bgGradient="linear-gradient(to right, #E2852E, #ABE0F0)"
                bgClip="text"
                lineHeight="1.2"
                pt={1}
              >
                What we’re building
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                maxW="2xl"
              >
                No vaporware—just live code and shipping dates.
              </Text>
            </VStack>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              gap={8}
              w="full"
            >
              <ProjectCard
                icon={IoPhonePortrait}
                title="Mobile Apps"
                subtitle="iOS & Android"
                description="Zero-lag, pixel-perfect natives. The kind you keep on the home screen."
                gradient="linear-gradient(135deg, #E2852E 0%, #F5C857 100%)"
              />
              <ProjectCard
                icon={HiSparkles}
                title="AI Agents"
                subtitle="Web"
                description="Agents that earn the right to be called “smart”. No prompt-engineering PhD required."
                gradient="linear-gradient(135deg, #ABE0F0 0%, #7BC8DA 100%)"
              />
              <ProjectCard
                icon={IoGameController}
                title="Games"
                subtitle="Steam"
                description="Boss fights and late-night “one more run”. Coming soon."
                gradient="linear-gradient(135deg, #F5C857 0%, #FFEE91 100%)"
              />
            </SimpleGrid>
          </VStack>
        </Container>

        {/* About Section */}
        <Container maxW="5xl" py={{ base: 12, md: 20 }}>
          <Box
            bg="white"
            rounded="3xl"
            p={{ base: 8, md: 12 }}
            shadow="xs"
            borderWidth="1px"
            borderColor="gray.100"
            cursor="pointer"
            onClick={() => setShowWebsite((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-pressed={showWebsite}
            aria-label="Toggle personal website"
            perspective="1200px"
          >
            <Box
              position="relative"
              minH={{ base: "260px", md: "220px" }}
              transformStyle="preserve-3d"
              transition="transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)"
              transform={showWebsite ? "rotateY(180deg)" : "rotateY(0deg)"}
            >
              <Box position="absolute" inset="0" backfaceVisibility="hidden">
                <VStack gap={6} align="start">
                  <Heading
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="800"
                    bgGradient="linear-gradient(to right, #E2852E, #F5C857)"
                    bgClip="text"
                  >
                    Built after hours, launched before Monday.
                  </Heading>
                  <Stack
                    gap={4}
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    lineHeight="1.8"
                  >
                    <Text>
                      I’m Wayne Z—full-time engineer, overtime founder.
                      TasteMates Labs is a one-person studio that treats nights
                      and weekends like a launch window. Ship, learn, iterate,
                      repeat.
                    </Text>
                    <Text>Check back; the changelog never sleeps.</Text>
                  </Stack>
                </VStack>
              </Box>
              <Box
                position="absolute"
                inset="0"
                backfaceVisibility="hidden"
                transform="rotateY(180deg)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="orange.50"
                rounded="2xl"
                borderWidth="1px"
                borderColor="orange.100"
              >
                <VStack gap={3} textAlign="center">
                  <Text
                    fontSize="sm"
                    color="orange.700"
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                    fontWeight="700"
                  >
                    Personal Website
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="800"
                    color="orange.900"
                    fontFamily="'SF Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
                  >
                    jwaynez.com
                  </Text>
                </VStack>
              </Box>
              <Box
                position="absolute"
                top={{ base: 4, md: 5 }}
                right={{ base: 4, md: 5 }}
                px={3}
                py={1}
                bg="orange.400"
                color="white"
                fontSize="xs"
                fontWeight="700"
                textTransform="uppercase"
                letterSpacing="0.06em"
                rounded="full"
                shadow="md"
                transform="rotate(3deg)"
                backfaceVisibility="hidden"
                animation="pulse 2.4s ease-in-out infinite"
              >
                Tap to flip
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Footer */}
        <Box py={12} textAlign="center">
          <Text color="gray.500" fontSize="sm">
            © {new Date().getFullYear()} TasteMates Labs LLC. Created by Wayne
            Z.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
