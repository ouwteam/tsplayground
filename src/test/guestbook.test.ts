jest.useFakeTimers()
import { Messages } from "../entities/messages";

beforeEach(() => {
    jest.resetAllMocks();
});

// This test shows how the constructor can be mocked, and how to spy on passed parameters.
describe("create guestbook", () => {
    it("can create a guestbook", async () => {
        const m = await Messages.create({
            user_id: 1, 
            message_content: "test message"
        });

        expect(m).toBeCalledWith(expect.objectContaining({
            message_content: "test message"
        }));
    });

    // it("sets 12 as the age of the cat", () => {
    //     new CatService().createANewCatByConstructor("garfield", 12);
    //     expect(Cat).toBeCalledWith(expect.objectContaining({
    //         age: 12,
    //     }));
    // });
});