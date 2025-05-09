import Image from 'next/image'

const MyReservationsPage = () => {
    return (
        <main className='max-w-[1500px] mx-auto px-6 pb-6'>
            <h1 className="my-6 text-2xl">My Reservations</h1>
            <div className='space-y-4'>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src=""
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Beach house"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 12/06/25</p>
                        <p className="mb-2"><strong>Check out date:</strong> 16/06/25</p>

                        <p className="mb-2"><strong>Number of nights:</strong> 4</p>
                        <p className="mb-2"><strong>Total price:</strong>$400</p>

                        <div

                            className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
                        >
                            Go to property
                        </div>
                    </div>
                </div>

                <div className="p-5 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src=""
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Beach house"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 12/06/25</p>
                        <p className="mb-2"><strong>Check out date:</strong> 16/06/25</p>

                        <p className="mb-2"><strong>Number of nights:</strong> 4</p>
                        <p className="mb-2"><strong>Total price:</strong>$400</p>

                        <div

                            className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
                        >
                            Go to property
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default MyReservationsPage