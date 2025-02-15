import React from 'react'
import Webcam from 'react-webcam'
import WebcamCapture from './webcam'
import { Card ,CardBody,CardFooter} from '@nextui-org/react'
import { Input,Button,Image,Avatar } from '@nextui-org/react'
const UserPage = () => {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center'>
            <img src="./directional-sign.png" alt="" className='w-10' />
            <p className='font-semibold'>Kigali Rwanda</p>
            </div>
            <div>
                <img src="notification.png" alt=""  className='w-10'/>
            </div>
        </div>
        <div>
        <Input type="text" className="p-3" placeholder='Search Destinations'  variant="rounded" color="success"/>
        </div>
        <div className='p-4  flex justify-between'>
            <Button variant='ghost' color='primary'>Team</Button>
            <Button variant='bordered'>Map View</Button>
            <Button variant='bordered'>Explorer</Button>
            <Button variant='bordered'>Members</Button>
        </div>
        <div>
            <div className='container p-2'>
            <WebcamCapture/>
            </div>
           
        </div>

        <div className='p-3'>
         <h1 className='text-2xl mt-10'>Team-mates</h1>
         <div className='grid grid-cols-3 gap-2 '>
         <Card className=''>
            <CardBody>
              
                <Image src='./go (2).jpg'className=''></Image>
            
            </CardBody>

            <CardFooter>
                <div className=''>
                <p>Beast</p>
                <Avatar src='./map-pin.png'></Avatar>
                </div>
               
            </CardFooter>
         </Card>
         <Card className='w-40'>
         <CardBody>
                <Avatar src='./map-pin.png'></Avatar>
                <Image src='./go (2).jpg' className='w-[200px] h-[100px] object-cover'></Image>
            </CardBody>
            

         </Card>
         <Card className='w-20'>
            <CardBody>
                <Avatar src='./map-pin.png'></Avatar>
                <Image src='./go (2).jpg'className='w-[200px] h-[100px] object-cover'></Image>
            </CardBody>
         </Card>
         <Card className='w-40'>
         <CardBody>
                <Avatar src='./map-pin.png'></Avatar>
                <Image src='./go (2).jpg' className='w-[200px] h-[100px] object-cover'></Image>
            </CardBody>

         </Card>
         </div>
        
        </div>
    </div>
  )
}

export default UserPage