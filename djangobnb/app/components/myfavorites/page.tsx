import PropertyList from "../properties/PropertyList";
import { getUserId } from "@/app/lib/actions";


const MyFavoritesPage = async () => {
    const userId = await getUserId()

    if (!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">

            </main>
        )
    }

    return (
        <main className="max-w-[1500px] max-auto px-6 pb-12">
            <h1 className="my-6 text-2xl">My favorites</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PropertyList
                    favorites={true}
                />
            </div>
        </main>
    )
}

export default MyFavoritesPage