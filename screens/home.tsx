import { StatusBar } from 'expo-status-bar';
import { Text, Box, Button } from "native-base";

export default function Home({ navigation }: any) {
    return (
        <Box p="4" flex="1" backgroundColor="#2b2b2b">
            <StatusBar backgroundColor="transparent" />
            <Text color="white">Page with collected Manga</Text>
        </Box>
    );
}
