const {PrismaClient} = require('@prisma/client')

const db = new PrismaClient()

async function main() {
    try{
        await db.category.createMany({
            data:[
                {name: "Famous People"},
                {name: "Your Friend"},
                {name: "Movie Stars"},
                {name: "Games"},
                {name: "Scientist"},
                {name: "Yulin Xia"},
            ]
        })
    }catch(error){
        console.error("Error seeding default categories", error)
    } finally {
        await db.$disconnect()
    }
}


main()