import { StatusBar } from 'expo-status-bar';
import { Text, Box, Input, Button, Image, ScrollView, ZStack } from "native-base";
import { ActivityIndicator } from 'react-native';
import { searchManga } from "../api/jikan"
import { useState } from "react";


export default function Browse() {
    const [value, setValue] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const handlePress = async () => {
        const response = await searchManga(value);
        setData(response)
        setLoading(false)
    }

    return (
        <Box p="4" flex="1" backgroundColor="#2b2b2b">
            <StatusBar backgroundColor="transparent" />
            <Input
                placeholder="Search Manga"
                color="white"
                p="2"
                fontSize="18"
                mb="4"
                onChangeText={newValue => setValue(newValue)}
            />
            <Button onPress={handlePress}>Search</Button>
            <ScrollView mt="5" flex="1">
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <Box flex="1" flexDirection="row" flexWrap="wrap" justifyContent="space-between" >
                        {data.map((manga: any, index: number) => {
                            return (
                                <Box mb="4" key={index} position="relative">
                                    <Box backgroundColor="black" opacity=".2" position="absolute" zIndex="20" top="0" bottom="0" right="0" left="0" borderRadius="5" />
                                    <Image
                                        source={{
                                            uri: manga.images.jpg.large_image_url
                                        }}
                                        width="170"
                                        height="240"
                                        alt={`${manga.title}-image`}
                                        borderRadius="5" />
                                    <Text
                                        position="absolute"
                                        fontWeight="700"
                                        fontSize="15"
                                        bottom="1"
                                        color="white"
                                        zIndex="40"
                                        left="2"
                                        right="2"
                                    >
                                        {manga.title}
                                    </Text>
                                </Box>
                            )
                        })}
                    </Box>
                )}
            </ScrollView>
        </Box>
    );
}
