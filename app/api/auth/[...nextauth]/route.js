import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDB();

        // GitHub may not always return email
        if (!user.email) return false;

        const currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });

          user.name = newUser.username;
        } else {
          user.name = currentUser.username;
        }
      }
      return true;
    },

    async session({ session }) {
      await connectDB();

      const dbUser = await User.findOne({
        email: session.user.email,
      });
      

      if (dbUser) {
        session.user.name = dbUser.username;
      }

      return session;
    },
  },
});

// ✅ Correct export for App Router
export { handler as GET, handler as POST };