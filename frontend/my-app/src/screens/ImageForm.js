import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const ImagenForm = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false,
      });

      if (!result.cancelled) {
        setImage(result);
      }
    }
  };

  const enviarImagen = async () => {
    const formData = new FormData();
    formData.append('logoImage', image);

    try {
      const response = await axios.post('http://localhost:3000/imagen/single', 
        formData, {
          Header:{
          'Content-Type': 'multipart/form-data',
        },
      });
    
      console.log(response.data);
     // seleccionarImagen(image)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Seleccionar imagen" onPress={pickImage} />
      {image && (
        <View>
          <Text>Imagen seleccionada:</Text>
          <Text>{image.uri}</Text>
          <Button title="Enviar imagen" onPress={enviarImagen} />
        </View>
      )}
    </View>
  );
};

export default ImagenForm;