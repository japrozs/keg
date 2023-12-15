import { UserInput } from "../schemas/user-input";

// TODO: add more restrictions on username like can't contain @ and stuff
export const validateRegister = (options: UserInput) => {
    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "invalid email",
            },
        ];
    }

    if (options.password.length <= 6) {
        return [
            {
                field: "password",
                message: "length must be greater than 6",
            },
        ];
    }

    if (options.username.length <= 6) {
        return [
            {
                field: "username",
                message: "length must be greater than 6",
            },
        ];
    }

    return null;
};
