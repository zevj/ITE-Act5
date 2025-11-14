import prisma from "../lib/prisma.ts";
import bcrypt from "bcryptjs";

async function main() {
  const email = "202311473@gordoncollege.edu.ph";
  const password = "123";

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  console.log("User created successfully:");
  console.log(user);
}

main()
  .catch((err) => {
    console.error("Error creating user:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
