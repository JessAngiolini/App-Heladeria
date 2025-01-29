import React, { useState } from "react";
import {View, Button, Image, Text} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function LogoUploader() {
    const[ image, setImage] = useState(null);
    const[ error, setError] = useState('');

    //Funcion para seleccionar la imagen
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if(!result.canceled) {
            setImage(result.uri);
        }
    };
    
    //Funcion para subir el logo

    const uploadLogo = async () => {
        const formData = new FormData();
        formData.append('logo', {
            uri: image,
            type: 'image/jpeg',
            name: 'logo.jpg',
        });

        try {
            const response = await axios.post('http://localhost:3000/uploadLogo', formData, {
                headers: {
                    'Content-Type': "multipart/form-data",
                },
            });
            console.log('Logo subido', response.data.logoPath);
        } catch (error) {
            setError('Error al subir el logo')
    }
}
 return(
    <View>
        <Button title = "Seleccionar Logo" onPress={{pickImage}} />
        {image && <Image source = {{ uri: image}} dtyle = {{ width: 200, height: 200}} />}
        <Button title= "Subir Logo" onPress = {uploadLogo} />
        {error && <Text>{error}</Text>}
     </View>
 )
}