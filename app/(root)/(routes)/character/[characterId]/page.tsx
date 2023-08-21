import prismadb from "@/lib/prismadb";
import { CharacterForm } from "./components/character-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CharacterIdPagePoprs {
    params: {
        characterId: string
    }
}


const CharacterIdPage = async ({params}: CharacterIdPagePoprs) => {
    const {userId} = auth()

    if(!userId){
        return redirectToSignIn()
    }

    const character = await prismadb.character.findUnique({
        where: {
            id: params.characterId,
            userId
        }
    })

    const categories = await prismadb.category.findMany()




    return ( 
        <CharacterForm initialData = {character} categories={categories} />
     );
}
 
export default CharacterIdPage;