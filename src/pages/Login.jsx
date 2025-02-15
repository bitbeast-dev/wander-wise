import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import pb from "../utils/pocketbase"
import toast from "react-hot-toast";

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();


    async function loggin(data) {
        console.log("login")
        setLoading(true);
        toast.loading("Signing in...", { id: "login" })
        try {
            await pb.collection("users").authWithPassword(data.email, data.password);

            toast.success("Authenticating " + data.email, { id: "login" });
            navigate("/");
        } catch (err) {
            toast.error("Login failed", { id: "login" });
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(loggin)} className="absolute flex flex-col w-full h-full gap-4 p-5" style={{ background: "#04566e" }}>
            <h1 className="text-4xl font-bold text-center text-white font-fantasy">Wanderwise</h1>
            <h1 className="text-center text-2xl font-bold text-[#b4d330]">App</h1>
            <div className="flex flex-wrap w-full gap-4 p-5 mb-6 md:flex-nowrap md:mb-0">
                <Input disabled={loading} required label="Email" type="email" variant="bordered" color="success" placeholder="Enter Name or Email" className="text-white" {...register("email")} />
                <Input disabled={loading} required label="Password" placeholder="Enter Password" type="password" variant="bordered" color="success" className="text-white" {...register("password")} />
            </div>
            <div className="flex flex-col gap-4 p-5 ">
                {/* <p className="text-white">Forget Password</p> */}
                <Button disabled={loading} type="submit" className="w-full text-xl" style={{ background: "#b4d330", height: "50px" }}>
                    {loading ? "Loading..." : "Login"}
                </Button>
                <p className="text-white">Don't have an account</p>
                <Button type="button" onClick={() => navigate('/register')} className="w-full text-xl" style={{ background: "#b4d330", height: "50px" }}>Create New Account</Button>
            </div>

        </form>

    )
}

export default Login

