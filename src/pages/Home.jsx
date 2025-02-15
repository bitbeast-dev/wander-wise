import WebcamCapture from '../components/webcam'
import { Input, Button, Image, Avatar, user } from '@nextui-org/react'
import TeamMembers from '../components/TeamMembers'
import isLoggedIn from '../utils/sessionVerifier'
import { useEffect, useState } from 'react'
import pb from '../utils/pocketbase'

function Home() {
    isLoggedIn()
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        async function fetch_users() {
            const results = await pb.collection("users").getFullList();

            setAllUsers(results);
        }

        fetch_users();
    }, [])

    return (
        <>

            <div>
                <div className='flex items-center justify-between' style={{ padding: "30px" }}>
                    <div className='flex items-center'>
                        <img src="./directional-sign.png" alt="" className='w-10' />
                        <p className='font-semibold'>Kigali Rwanda</p>
                    </div>
                    <div>
                        <img src="notification.png" alt="" className='w-10' />
                    </div>
                </div>
                <div>
                    <Input type="text" className="p-3" placeholder='Search Destinations' variant="rounded" color="success" />
                </div>
                <div className='flex justify-between p-4'>
                    <Button variant='ghost' color='primary'>Team</Button>
                    <Button variant='bordered'>Map View</Button>
                    <Button variant='bordered'>Explorer</Button>
                    <Button variant='bordered'>Members</Button>
                </div>
                <div>
                    <div className='container p-2'>
                        <WebcamCapture />
                    </div>

                </div>

                <div className='p-3'>
                    <h1 className='mt-10 text-2xl'>Team Members</h1>
                    <div className='flex flex-wrap' style={{ gap: "50px" }}>
                        {allUsers.map((data, index) => (
                            <TeamMembers key={index} img={pb.files.getURL(data, data.avatar)} names={data.name} />
                        ))}
                    </div>

                </div>
            </div>

        </>

    )
}

export default Home
