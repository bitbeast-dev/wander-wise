import Webcam from "react-webcam";
import { Button } from "@nextui-org/react";


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = () => (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        
        <Button
        className="mt-10"
        color="primary"
        variant="shadow"
          onClick={() => {
            const imageSrc = getScreenshot()
          }}
        >
          Take Photo
        </Button>
      )}
    </Webcam>
  );

  export default WebcamCapture