import Webcam from "react-webcam";
import { Button } from "@nextui-org/react";
import pb from "../utils/pocketbase";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const saveImage = async (imageData) => {
    try {
      // Convert base64 to blob
      const base64Response = await fetch(imageData);
      const blob = await base64Response.blob();

      // Create form data
      const formData = new FormData();
      formData.append('img', blob, 'capture.jpg');

      // Save to PocketBase
      await pb.collection('images').create(formData);
      console.log('Image saved successfully');
      Swal.fire({
        title: "Image saved successfully",
        text: "Our Ai is about to review the image and confirm if you really experienced everything",
        icon: "success"
      })
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  return (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
      style={{ borderRadius: "20px" }}
    >
      {({ getScreenshot }) => (
        <Button
          color="primary"
          variant="shadow"
          onClick={() => {
            const imageSrc = getScreenshot();
            saveImage(imageSrc);
          }}
          style={{ marginTop: "20px" }}
        >
          Take Photo
        </Button>
      )}
    </Webcam>
  );
};

export default WebcamCapture;