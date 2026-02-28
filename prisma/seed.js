import prisma from '../src/utils/prismaClient.js';

const main = async () => {
    console.log('🌱 Starting seed...');

    await prisma.country.createMany({
        data: [
            {
                name: "Brazil",
                capital: "Brasilia",
                continent: "South America",
                flagUrl: "https://i.imgur.com/AUh9PAH.png"
            },
            {
                name: "Argentina",
                capital: "Buenos Aires",
                continent: "South America",
                flagUrl: "https://i.imgur.com/3EXm3HS.gif"
            },
            {
                name: "United States",
                capital: "Washington, D.C.",
                continent: "North America",
                flagUrl: "https://i.imgur.com/tFnsakL.png"
            },
            {
                name: "Canada",
                capital: "Ottawa",
                continent: "North America",
                flagUrl: "https://i.imgur.com/QUhvv5e.gif"
            },
        ],
        skipDuplicates: true,
    });

    console.log('✅ Seed finished');
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
