"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import googleLogo from "public/icons/google.png";
import styles from "@components/Layout/Layout.module.scss";

export default function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button
            onClick={handleClick}
            className={styles.button}
        >
            <Image src={googleLogo} alt="Google Logo" width={15} height={15} />
            <span>Continue with Google</span>
        </button>
    );
}
