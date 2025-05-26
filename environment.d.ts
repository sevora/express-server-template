declare global {
    namespace NodeJS {
        interface ProcessEnv {
            /**
             * Example value only, edit this interface
             * to match your actual environment variables.
             */
            readonly SOME_SECRET_VALUE?: string;
            
            /**
             * A comma-separated list of allowed CORS origins. This usually means the
             * URL that the client application is hosted on.
             * Example: "https://example.com, https://another-example.com"
             */
            readonly CORS_ORIGINS: string;

            /**
             * The port on which the server will listen.
             * If not specified, defaults to 80.
             */
            readonly PORT?: string;
        }
    }
}

export {}