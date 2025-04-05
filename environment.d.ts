declare global {
    namespace NodeJS {
        interface ProcessEnv {
            readonly SOME_SECRET_VALUE?: string;
            readonly PORT?: string;
        }
    }
}

export {}