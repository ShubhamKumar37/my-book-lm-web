"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export function AuthGuard({ children }) {
    const router = useRouter();

    const {
        data: session,
        isPending,
        error,
    } = authClient.useSession();

    // Log authentication state whenever it changes.
    useEffect(() => {
        console.group("[AuthGuard] Session status");

        console.log("isPending:", isPending);
        console.log("hasSession:", Boolean(session));
        console.log("hasUser:", Boolean(session?.user));
        console.log("hasSessionData:", Boolean(session?.session));
        console.log("error:", error?.message ?? null);

        console.groupEnd();
    }, [session, isPending, error]);

    useEffect(() => {
        console.log("[AuthGuard] Redirect check", {
            isPending,
            hasSession: Boolean(session),
            shouldRedirect: !isPending && !session,
        });

        if (!isPending && !session) {
            router.replace("/");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return <p>Checking authentication...</p>;
    }

    if (error || !session) {
        return null;
    }

    return children;
}