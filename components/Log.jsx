import {Input,Button} from "@nextui-org/react";

export default function Log() {


  return (
    <div className="w-full flex flex-col gap-4  h-full absolute p-5" style={{background:"#04566e"}}>
          <h1 className="font-bold font-fantasy text-4xl text-white text-center">Wanderwise</h1>
          <h1 className="text-center text-2xl font-bold text-[#b4d330]">App</h1>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 p-5">
          <Input label="Email" type="email"  variant="bordered" color="success" placeholder="Enter Name or Email" className="text-white"/>
          <Input label="Email" placeholder="Enter Password" type="email" variant="bordered" color="success" className="text-white"/>
        </div>
        <div className="p-5 flex flex-col gap-4  ">
            <p className="text-white">Forget Password</p>
            <Button className="w-full text-xl" style={{background:"#b4d330",height:"50px"}}>Login</Button>
            <p className="text-white">Don't have an account</p>
            <Button className="w-full text-xl" style={{background:"#b4d330",height:"50px"}}>Create New Account</Button>
        </div>

    </div>
  );
}
