export default async function (
    endpoint: string,
    {
        method,
        body,
        auth = true,
    }: {
        method: "GET" | "POST" | "PUT" | "DELETE";
        body?: { [key: string]: string };
        auth?: boolean;
    }
) {
    try {
        const config = useRuntimeConfig();

        const headers: Record<string, string> = {
            "content-type": "application/json",
        };

        if (auth) {
            const token = useCookie("api_tracking_jwt").value;
            if (token) headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(
            `${config.public.apiTrackingBaseUrl}${endpoint}`,
            {
                method,
                headers,
                ...(body ? { body: JSON.stringify(toRaw(body)) } : {}),
            }
        );

        if (!response.ok) throw new Error("Une erreur est survenue");

        return await response.json();
    } catch (err) {
        return {
            error: true,
            message: err instanceof Error ? err.message : "Unknown error",
        };
    }
}
