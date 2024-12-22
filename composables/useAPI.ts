export default async function useAPI(
    endpoint: string,
    { method, body, auth = true }: {
        method: "GET" | "POST" | "PUT" | "DELETE";
        body?: { [key: string]: unknown };
        auth?: boolean;
    }
) {
    try {
        const config = useRuntimeConfig();

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (auth) {
            const token = useCookie("api_tracking_jwt").value;
            if (token) headers.Authorization = `Bearer ${token}`;
        }

        const url = `${config.public.apiTrackingBaseUrl}${endpoint}`;
        const options: RequestInit = {
            method,
            headers,
        };

        if (body) {
            options.body = JSON.stringify(toRaw(body));
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            const contentType = response.headers.get("Content-Type");
            let errorMessage = "Unknown error occurred";

            if (contentType && contentType.includes("application/json")) {
                const errorData = await response.json();
                errorMessage = errorData.message || JSON.stringify(errorData);
            } else {
                errorMessage = await response.text();
            }

            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (err) {
        console.error("API Error:", err);
        return {
            error: true,
            message: err instanceof Error ? err.message : "Unknown error",
        };
    }
}

