import React from 'react'

const Profile = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl bg-sky-200 rounded-md p-6 shadow-md">
                <form action="">
                    <h5 className="font-[Poppins] text-2xl md:text-3xl text-center tracking-wide font-bold">
                        Edit Profile
                    </h5>

                    {/* title, first, last name */}
                    <div className="flex flex-col md:flex-row gap-3 w-full mt-4">
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">Title</label>
                            <input
                                type="text"
                                placeholder="Mr/Mrs"
                                name="title"
                                className="border rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="border rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="border rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* email & phone */}
                    <div className="flex flex-col md:flex-row gap-3 w-full mt-4">
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="border rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">Phone</label>
                            <input
                                type="number"
                                name="phone"
                                className="border rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* address, city, zip */}
                    <div className="flex flex-col md:flex-row gap-3 w-full mt-4">
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">City</label>
                            <input
                                type="text"
                                name="city"
                                className="border rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">Address</label>
                            <input
                                type="text"
                                name="address"
                                className="border rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-lg md:text-xl font-[Poppins]">ZipCode</label>
                            <input
                                type="number"
                                name="zip"
                                className="border rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* profile image */}
                    <div className="flex flex-col w-full mt-4">
                        <label className="text-lg md:text-xl font-[Poppins]">Profile Image</label>
                        <input
                            type="file"
                            name="img"
                            className="block w-full text-sm text-gray-500
                                       file:mr-4 file:py-2 file:px-4
                                       file:rounded-full file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-sky-50 file:text-sky-700
                                       hover:file:bg-sky-100"
                        />
                    </div>

                    {/* button */}
                    <button
                        type="submit"
                        className="bg-sky-600 text-white p-3 rounded-md w-full mt-6 hover:bg-sky-700 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Profile
