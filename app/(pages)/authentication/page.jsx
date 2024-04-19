import GoogleSignInButton from "./_components/authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "app/lib/auth";
import { redirect } from "next/navigation";
import styles from "@components/Layout/Layout.module.scss"

export default async function SignInPage() {
    const session = await getServerSession(authConfig);

    console.log("Session: ", session);

    if (session) return redirect("/");

    return (
        <main className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.title}>Sign In</h1>
                <GoogleSignInButton />
            </div>
        </main>
    );
}
