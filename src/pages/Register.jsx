import { Input, Button } from "@nextui-org/react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import pb from "../utils/pocketbase";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function Register() {
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const createAccount = async (data) => {
        try {
            await pb.collection("users").create(data)
            Swal.fire({
                title: 'Successfully',
                text: 'Account Created Successfully !',
                icon: 'success',
                confirmButtonText: 'Go To Login'
            })

            setTimeout(navigate("/login"), 2000);

        } catch (err) {
            toast.error("Login failed")
        }
    }
    return (
        <form onSubmit={handleSubmit(createAccount)} className="absolute flex flex-col w-full h-full gap-4 p-5" style={{ background: "#04566e" }}>
            <h1 className="text-4xl font-bold text-center text-white font-fantasy">Wanderwise</h1>
            <h1 className="text-center text-2xl font-bold text-[#b4d330]">App</h1>
            <div className="flex flex-wrap w-full gap-4 p-5 mb-6 md:flex-nowrap md:mb-0">
                <Input label="Full Name" type="text" variant="bordered" color="success" placeholder="Enter your Full Name" className="text-white" {...register("name")} />
                <Input label="Email" type="email" variant="bordered" color="success" placeholder="Enter your email" className="text-white" {...register("email")} />
                <Input label="Phone" type="text" variant="bordered" color="success" placeholder="Enter your phone number(+250)" className="text-white" {...register("email")} />
                <Input label="Password" type="password" variant="bordered" color="success" placeholder="Enter your password" className="text-white" {...register("password")} />
                <Input label="Confirm Password" type="password" variant="bordered" color="success" placeholder="Confirm your password" className="text-white" {...register("passwordConfirm")} />

            </div>
            <div className="flex flex-col gap-4 p-5 ">

                <Button type="submit" className="w-full text-xl" style={{ background: "#b4d330", height: "50px" }} onClick={createdAccount}>Create New Account</Button>
                <p className="text-white">Already have an account ?</p>

                <Button onClick={() => navigate('/login')} className="w-full text-xl" style={{ background: "#b4d330", height: "50px" }}>Login</Button>

            </div>

        </form>
    );
}
