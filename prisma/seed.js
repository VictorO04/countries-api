import prisma from '../src/utils/prismaClient.js';

const main = async () => {
    console.log('🌱 Starting seed...');

    await prisma.country.createMany({
        data: [
            
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
