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
}