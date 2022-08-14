import { User } from "../api/models";
import { userRepo } from "../api/repositories";

describe("test user repo", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe("create user", () => {
        it("should can create user", async () => {
            const payload = {
                name: "John Doe",
                username: "johndoe",
                password: "123JohnIsDoe"
            }

            User.create = jest.fn().mockResolvedValue(payload);
            const result = await userRepo.create(payload);

            expect(result).toEqual(payload);
            expect(User.create).toHaveBeenCalledTimes(1);
        });
    });

    describe("delete user ", () => {
        it("shout can delete user", async () => {
            const user_id = 1;
            const user = {
                id: user_id,
                name: "John Doe",
                username: "johndoe",
                password: "123JohnIsDoe",
                destroy: () => true,
            };

            User.findByPk = jest.fn().mockResolvedValue(user);
            const ok = await userRepo.deleteUser(user_id);

            expect(ok).toEqual(true);
            expect(User.findByPk).toBeCalledTimes(1);
        });

        it("throw error if user not found", async () => {
            const user_id = 1;
            const user = null;

            console.error = jest.fn();
            User.findByPk = jest.fn().mockResolvedValue(user);

            try {
                await userRepo.deleteUser(user_id);
            } catch (error) {
                expect(error).toBe("User not found");
            }

            expect(User.findByPk).toBeCalledTimes(1);
        });
    });

    describe("check user", () => {
        it("should true if user exist", async () => {
            const username = "johndoe";
            const user = {
                id: 1,
                name: "John Doe",
                username: username,
                password: "123JohnIsDoe",
            };

            User.findOne = jest.fn().mockResolvedValue(user);
            const isUserExist = await userRepo.isUserExist(username);
            expect(isUserExist).toBeTruthy();
            expect(User.findOne).toBeCalledTimes(1);
        });

        it("should false if user not exist", async () => {
            const username = "johndoe";
            const user = null;

            User.findOne = jest.fn().mockResolvedValue(user);
            const isUserExist = await userRepo.isUserExist(username);
            expect(isUserExist).toBeFalsy();
            expect(User.findOne).toBeCalledTimes(1);
        })
    });

    describe("test find all", () => {

        it("shoult return list of user", async () => {
            const payload = [
                {
                    id: 1, 
                    name: "John Doe",
                    username: "johndoe",
                },
                {
                    id: 2, 
                    name: "Steve Rukhyat",
                    username: "rukhyatsteve",
                },
            ];
    
            User.findAll = jest.fn().mockResolvedValue(payload);
            const result = await userRepo.findAll();

            expect(result).toEqual(payload);
            expect(User.findAll).toBeCalledTimes(1);
        });

    });
});