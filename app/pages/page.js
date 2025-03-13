"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { BsGoogle } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { UseUserAuth } from "../firebase/auth";
import { addBlock, getBlocks } from "../firebase/firestore";

// Dynamically import the Editor component with no SSR
const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
        {
            type: "header",
            data: {
                text: "",
                level: 1,
            },
        },
    ],
};

export default function Home() {
    const [data, setData] = useState(INITIAL_DATA);

    const [isLoading, setIsLoading] = useState(false);

    const { user, gitHubSignIn, firebaseSignOut, googleSignIn } = UseUserAuth();

    async function signInGithub() {
        if (isLoading) return; // Prevent multiple clicks
        setIsLoading(true);
        try {
            await gitHubSignIn();
        } catch (error) {
            if (error.code === 'auth/user-cancelled') {
                console.log('User cancelled the GitHub sign-in process');
            } else {
                console.error(error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function signInGoogle() {
        if (isLoading) return; // Prevent multiple clicks
        setIsLoading(true);
        try {
            await googleSignIn();
        } catch (error) {
            if (error.code === 'auth/user-cancelled') {
                console.log('User cancelled the Google sign-in process');
            } else {
                console.error(error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function signOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                try {
                    const blocksData = await getBlocks(user.uid); // Get data from Firebase
                    if (blocksData && blocksData.length > 0) {
                        setData(blocksData[0]); // Assuming the data is stored as a single document
                    }
                    else {
                        const savedData = localStorage.getItem("editorData");
                        if (savedData > 0) {
                            setData(JSON.parse(savedData));
                        } else {
                            setData(INITIAL_DATA);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching blocks from Firebase:", error);
                }
            };
            fetchData();
        }
    }, [user]);

    async function handleSaveData() {
        try {
            // Save data to localStorage
            localStorage.setItem("editorData", JSON.stringify(data));

            // Save data to Firebase
            if (user) {
                await addBlock(user.uid, data); // Assuming addBlock is a function to save data in Firestore
            } else {
                console.log("User not signed in. Data not saved to Firebase.");
            }

            console.log("Data saved successfully in both localStorage and Firebase.");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    }

    return (
        <main className="">
            {user ? (
                <div className="border-2">
                    <Editor data={data} onChange={setData} editorBlock="editorjs-container" />
                    <button
                        onClick={() => handleSaveData()}
                        className="border-0 px-5 py-2.5 bg-gray-800 text-white font-bold cursor-pointer"
                    >
                        Save Data
                    </button>
                    <button
                        onClick={signOut}
                        className="border-0 px-5 py-2.5 bg-gray-800 text-white font-bold cursor-pointer"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col justify-center items-center gap-10 text-2xl">
                        <h1 className="text-5xl font-bold m-2 justify-center flex">
                            Sign in to continue
                        </h1>
                        {/* <button
                            className="text-white p-2 m-2 rounded-md bg-[#555555] flex flex-row w-80 gap-4 text-[25px]"
                            onClick={signInGithub}
                            disabled={isLoading}
                        >
                            <AiFillGithub className="mt-1 ml-4" />
                            Sign in with GitHub
                        </button> */}
                        <button
                            className="text-white p-2 m-2 rounded-md bg-blue-700 flex flex-row w-80 gap-4 text-[25px]"
                            onClick={signInGoogle}
                            disabled={isLoading}
                        >
                            <BsGoogle className="mt-1 ml-4" />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}