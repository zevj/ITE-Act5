import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const email = "sample@gordoncollege.edu.ph";
  const password = "password123";

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashed,
    },
  });

  console.log("Seeded user:", email);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
