import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = async () => {
    if (userData.password === userData.confirmPassword) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          name: userData.username,
          email: userData.email,
          password: userData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        window.location.href = "/IniciaSesion";
        toast.success("Success!");
      } else {
        const data = await response.json();
        console.log("response data", data);
        data.errors.map((error) => {
          toast.error(error.msg);
        });
      }
    }

    // alert(userData.confirmPassword);
  };

  return (
    <section className="lg:h-screen h-auto bg-neutral-200 dark:bg-neutral-700">
      <ToastContainer position="top-right" />
      <div className=" h-full lg:p-10 lg:pt-24 p-4">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-1/3 border border-blue-300 pt-4 rounded-b-none lg:rounded-lg rounded-lg lg:rounded-r-none">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="./images/logo1.png"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-4 pb-1 lg:text-4xl text-2xl font-semibold">
                        Somos una empresa de automoción.
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4 lg:text-2xl text-xl">
                        Regístrese en su cuenta.
                      </p>
                      {/* <!--Username input--> */}
                      <div className="w-full mb-5">
                        <Input
                          size="lg"
                          label="Su correo electrónico"
                          onChange={(event) =>
                            setUserData({
                              ...userData,
                              username: event.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full mb-5">
                        <Input
                          size="lg"
                          label="Nombre de usuario"
                          onChange={(event) =>
                            setUserData({
                              ...userData,
                              email: event.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full mb-5">
                        <Input
                          size="lg"
                          label="Contraseña"
                          type="password"
                          onChange={(event) =>
                            setUserData({
                              ...userData,
                              password: event.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full mb-5">
                        <Input
                          size="lg"
                          label="Confirmar contraseña"
                          type="password"
                          onChange={(event) =>
                            setUserData({
                              ...userData,
                              confirmPassword: event.target.value,
                            })
                          }
                        />
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block bg-gradient-to-r from-blue-700 to-blue-400 w-full rounded px-6 pb-2 pt-2.5 text-xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            onClick={handleRegister}
                            // style={{
                            //   background:
                            //     "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            // }}
                          >
                            Regístrese en
                          </button>
                        </TERipple>

                        {/* <!--Forgot password link--> */}
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div className="flex items-center bg-gradient-to-r from-blue-700 to-blue-400 rounded-b-lg lg:w-2/3 lg:rounded-r-lg lg:rounded-bl-none">
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
